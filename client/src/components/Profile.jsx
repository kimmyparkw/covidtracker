//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import StateSingle from './StateSingle'

class Profile extends React.Component {
   
    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> <h3><a href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
            {   
                this.props.userSelected.map((stateData)=> (
                    <StateSingle key={stateData.hash} usData={stateData} currentPage={this.props.currentPage}/>
                ))
            }
            </>
        )
    }
}

export default Profile