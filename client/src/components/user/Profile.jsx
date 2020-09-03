//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import HistoricalChart from '../data/HistoricalChart.jsx';
import {Link} from 'react-router-dom'

class Profile extends React.Component {
   
    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> <h3><a href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
            {
                    this.props.userSelected.map((stateData, index) => (
                    <>
                    <Link to={`/stats/${stateData[index].state}`}><h2>{this.props.fullName[stateData[index].state]}</h2></Link>
                    <HistoricalChart key={stateData[index].hash} delete={this.props.delete} fullName={this.props.fullName} stateName={stateData[index].state} dailyChartData={stateData}/>
                    <button onClick={() => this.props.delete([stateData[index].state])}>Delete from profile</button>
                    </>
                ))
            }
            </>
        )
    }
}

export default Profile