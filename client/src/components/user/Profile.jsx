//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import HistoricalChart from '../data/HistoricalChart.jsx';
import {Link} from 'react-router-dom'

class Profile extends React.Component {
   
    render() {
        return (
            <div className='profile-container'>
                <h1 className='welcome'>{`Welcome back, ${this.props.user.username}!`}</h1>
                <h3 className='edit-user-link'><a className='edit-user-link' href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
                <div className="saved-states-container">
                    {this.props.userSelected.length === 0 && <h2 className='hero-text profile-no-states'>Hello and welcome to our COVID-19 tracking app.  You are not currently tracking any state information. Click Stats above to get started.</h2>}
                {
                        this.props.userSelected.map((stateData, index) => (
                        <div className="saved-state">
                            <Link to={`/stats/${stateData[index].state}`}><h2>{this.props.fullName[stateData[index].state]}</h2></Link>
                            <HistoricalChart key={stateData[index].hash} delete={this.props.delete} fullName={this.props.fullName} stateName={stateData[index].state} dailyChartData={stateData} />
                            <button onClick={() => this.props.delete([stateData[index].state])}>Delete from profile</button>
                        </div>
                    ))
                }
                </div>

            </div>
        )
    }
}

export default Profile
