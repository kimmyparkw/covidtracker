import React from 'react'
import StatesList from './StatesList.jsx'
import StateSingle from './StateSingle.jsx'
import FullStateNames from './FullStateNames'
import Profile from './Profile'

class StateController extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            isLoaded: false,
            allStateData: null,
            singleStateData: null,
            usData: null,
            currentPage: props.currentPage,
            currentId: props.currentId,
            fireRedirect: false,
            redirectPath: null,
            fullStateNames: FullStateNames,
            userSelected: null,
        })
    }

    getAllData = () => {
        fetch('/stats') 
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allStateData: res.stateTotals,
                usData: res.usTotals,
            })
        })
    }

    getSingleState = () => {
        fetch(`/stats/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
            console.log("single state", res)
            this.setState({
                singleStateData: res.singleState,
                isLoaded: true,
            })
        })
    }

    getUserSelected = () => {
        console.log(`hi`)
        fetch(`/user/profile`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                userSelected: res.stateTotals
            })
        })
    }

    componentDidMount() {
        if (this.state.currentPage === 'index') {
            this.getAllData()
        } else if (this.state.currentPage === 'show') {
            this.getSingleState()
        } 
        else if(this.state.currentPage === 'profile') {
            // this.getUserSelected()
            this.setState({
                isLoaded: true
            })
        }
  
    }

    handleDelete = (id) => {
        fetch(`/user/stats/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("delete res", res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
        })
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <StatesList usData={this.state.usData} allStateData={this.state.allStateData} currentPage={this.state.currentPage} fullName={this.state.fullStateNames}/>
            case 'show':
                return <StateSingle currentPage={this.state.currentPage} singleStateData={this.state.singleStateData}/>
            case 'profile':
                return <Profile userSelected={this.state.userSelected}/>
                
        }
    }

    render() {
        return (
            <div className="container">
                {(this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default StateController