import React from 'react'
import StatesList from './StatesList.jsx'
import StateSingle from './StateSingle.jsx'
import FullStateNames from './FullStateNames.jsx'
import Profile from '../user/Profile.jsx'
import { Redirect } from 'react-router-dom'

class StateController extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            isLoaded: false,
            allStateData: null,
            singleStateData: null,
            singleStateHistorical: null,
            singleStateMonth: null,
            singleStateWeek: null,
            singleStateMeta: null,
            usData: null,
            usDaily: null,
            usWeek: null,
            usMonth: null,
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

        fetch('/api/stats') 
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allStateData: res.stateTotals,
                usData: res.usTotals,
                usDaily: res.country,
                usWeek: res.countryWeek,
                usMonth: res.countryMonth,
            })
        })
    }

    getSingleState = () => {
        fetch(`/api/stats/${this.state.currentId}`)
        .then(res => res.json())
            .then(res => {
            this.setState({
                singleStateData: res.singleState,
                singleStateHistorical: res.singleStateHistorical,
                singleStateMonth: res.singleStateMonth,
                singleStateWeek: res.singleStateWeek,
                singleStateMeta: res.singleStateMeta,
                isLoaded: true,
            })
        })
    }

    getUserSelected = () => {
        fetch(`/api/user/profile`)
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

    handleDelete = (id) => {
        fetch(`/api/user/stats/${this.state.userData.id}/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserSelected()
        }).catch(err => console.log(err))
    }

    saveToProfile = () => {
        console.log(`I'm saving this`)
        fetch(`/api/user/stats/${this.state.currentId}`, {
            method: 'POST',
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            console.log(`past set state section`)
            console.log(this.state.fireRedirect)
            this.getUserSelected();
        }).catch(err => console.log(err))
    }


    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <StatesList usData={this.state.usData} usWeek={this.state.usWeek} usMonth={this.state.usMonth} allStateData={this.state.allStateData} usDaily={this.state.usDaily} currentPage={this.state.currentPage} fullName={this.state.fullStateNames}/>
            case 'show':
                return <StateSingle currentPage={this.state.currentPage} fullName={this.state.fullStateNames} userState={this.state.userState} singleStateData={this.state.singleStateData} singleStateHistorical={this.state.singleStateHistorical} singleStateMeta={this.state.singleStateMeta} singleStateWeek={this.state.singleStateWeek} singleStateMonth={this.state.singleStateMonth} save={this.saveToProfile}/>
            case 'profile':
                return <Profile userSelected={this.state.userSelected} delete={this.handleDelete} fullName={this.state.fullStateNames} user={this.state.userData} currentPage={this.state.currentPage} userState={this.state.userState } />
                
        }
    }

    render() {
        return (
            <div className="container">
                {(this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>}
                {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
            </div>
        )
    }
}

export default StateController