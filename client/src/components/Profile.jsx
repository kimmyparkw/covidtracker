//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import { Link } from 'react-router-dom'
import StateSnapshot from './StateSnapshots.jsx'

class Profile extends React.Component {
    
    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> 
            {
                this.props.userSelected.map((state)=> (
                    <StateSnapshot key={state.hash} delete={this.props.delete} state={state} fullName={this.props.fullName} currentPage={this.props.currentPage}/>
                ))
            }
            </>
        )
    }
}

export default Profile