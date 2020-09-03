//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import HistoricalChart from '../data/HistoricalChart.jsx';
import {Link} from 'react-router-dom'

class Profile extends React.Component {
   
    render() {
        return (
            <>
            <h1 className='welcome'>{`Welcome Back, ${this.props.user.username}!`}</h1>
            <h3 className='edit-user-link'><a className='edit-user-link' href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
            <div className="saved-states-container">
            {
                    this.props.userSelected.map((stateData, index) => (
                    <div className="saved-state">
                        <Link to={`/stats/${stateData[index].state}`}><h2>{this.props.fullName[stateData[index].state]}</h2></Link>
                        <HistoricalChart key={stateData[index].hash} delete={this.props.delete} fullName={this.props.fullName} stateName={stateData[index].state} chartData={stateData} />
                        <button onClick={() => this.props.delete(this.props.stateName)}>Delete from profile</button>
                    </div>
                ))
            }
            </div>

            </>
        )
    }
}

export default Profile