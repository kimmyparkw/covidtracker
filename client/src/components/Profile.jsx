//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import StateSingle from './StateSingle'
import HistoricalChart from './HistoricalChart';

class Profile extends React.Component {
   
    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> <h3><a href={`/user/profile/${this.props.user.id}`}>Edit User Profile</a></h3>
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


//within the map: if state.state is === state_id within the selectedState object, then return that id
//object.value or object.keys
//make a constant that stores the primary serial key from the ^^ conditional and then pass down as a prop