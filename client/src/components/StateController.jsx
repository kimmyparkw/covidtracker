import React from 'react'
import StatesList from './StatesList.jsx'
import StateSingle from './StateSingle.jsx'
import FullStateNames from './FullStateNames'

class StateController extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            isLoaded: false,
            allStateData: null,
            singleStateData: null,
            usData: null,
            currentPage: props.currentPage,
            fireRedirect: false,
            redirectPath: null,
            fullStateNames: FullStateNames,
        })
    }

    getAllData = () => {
        fetch('/stats') 
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                isLoaded: true,
                allStateData: res.stateTotals,
                usData: res.usTotals,
            })
        })
    }

    getSingleState = (id) => {
        fetch(`/stats/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("single state", res)
            this.setState({
                singleStateData: res.data,
                isLoaded: true,
            })
        })
    }

    componentDidMount() {
        if (this.state.currentPage === 'index') {
            this.getAllData()
        } else if (this.state.currentPage === 'show') {
            this.getSingleState()
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
                return <StatesList usData={this.state.usData} allStateData={this.state.allStateData} fullName={this.state.fullStateNames}/>
            case 'show':
                return <StateSingle singleStateData={this.state.singleStateData}/>
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