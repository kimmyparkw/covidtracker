//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import StateSingle from './StateSingle'

class Profile extends React.Component {
    render() {
        return (
            <>
            <h1>Welcome Back, User!</h1>
            {
                this.props.userSelected.map((stateData)=> {
                    <StateSingle usData={stateData}/>
                })
            }
            </>
        )
    }
}

export default Profile