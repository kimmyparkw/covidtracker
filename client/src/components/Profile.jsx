//has welcome back with username and edit profile button
//includes the state snapshots

import React from 'react'
import { Link } from 'react-router-dom'
import StateSnapshot from './StateSnapshots.jsx'

class Profile extends React.Component {
    
    findSerialKey = () => {
        const serialKey = selectedState.filter((el) => {
            return el.state_id === 
            }
        )
    }

    render() {
        return (
            <>
            <h1>{`Welcome Back, ${this.props.user.username}!`}</h1> 
            {
                this.props.userSelected.map((state)=> (
                    <StateSnapshot key={state.hash} delete={this.props.delete} serialKey={} state={state} fullName={this.props.fullName} currentPage={this.props.currentPage}/>
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