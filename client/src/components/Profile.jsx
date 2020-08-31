//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            userId: this.props.userId,
        }
    }
    render() {
        return (
            <div className="PROFILE">
                
                {console.log("req:",this.req)}
            <Link to={`/user/profile/${this.userId}`}>Edit Profile</Link>
            <h2>"hello world"</h2>
            </div>
        )
    }
}

export default Profile