//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import StateSingle from './StateSingle'
import HistoricalChart from './HistoricalChart';

class Profile extends React.Component {
    
    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> 
            {
                this.props.userSelected.map((stateData, index)=> (
                    <HistoricalChart key={stateData[index].hash} stateName={stateData[index].state} chartData={stateData} />
                ))
            }
            </>
        )
    }
}

export default Profile