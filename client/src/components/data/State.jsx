import React from 'react'

function State(props) {
    return (
        <h1>{props.state.state}</h1>
    )
}

export default State


// onClick={() => {props.getSingleState(props.state.state)}}