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
            userState: props.userState,
            fireRedirect: false,
            redirectPath: null,
            fullStateNames: FullStateNames,
            userSelected: null,
            userData: null,
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
        fetch(`/user/profile`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                userSelected: res.stateTotals,
                isLoaded: true,
                userData: res.user,
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
            this.getUserSelected()
        }
  
    }

    handleDelete = () => {
        fetch(`/user/stats/${this.state.currentId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getAllData()
        }).catch(err => console.log(err))
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <StatesList usData={this.state.usData} allStateData={this.state.allStateData} currentPage={this.state.currentPage} fullName={this.state.fullStateNames}/>
            case 'show':
                return <StateSingle currentPage={this.state.currentPage} userState={this.state.userState} singleStateData={this.state.singleStateData}/>
            case 'profile':
                return <Profile userSelected={this.state.userSelected} user={this.state.userData} currentPage={this.state.currentPage}/>
                
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