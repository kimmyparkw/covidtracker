//detailed information about a particular state

import React from 'react'
import { Link } from 'react-router-dom'

function State(props) {
    return (
        <h1>{props.state.state}</h1>
    )
}

export default State


// onClick={() => {props.getSingleState(props.state.state)}}