//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import HistoricalChart from '../data/HistoricalChart.jsx';

class Profile extends React.Component {
   
    render() {
        return (
            <>
            <h1 className='welcome'>{`Welcome Back, ${this.props.user.username}!`}</h1>
            <h3 className='edit-user-link'><a className='edit-user-link' href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
            {
                this.props.userSelected.map((stateData, index)=> (
                    <HistoricalChart key={stateData[index].hash} delete={this.props.delete} fullName={this.props.fullName} stateName={stateData[index].state} chartData={stateData} />

                ))
            }
            </>
        )
    }
}

export default Profile