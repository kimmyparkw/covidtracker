//the name and a simple graphic that will show on the
//user's profile pages as a simple overview of the saved state

import React from 'react'
import { Link } from 'react-router-dom'

export default function StateSnapshot(props) {
    return (
    <div className='info-container'>
        <Link to={`/stats/${props.state.state}`}><h1>{props.fullName[props.state.state]} COVID-19 Statistics</h1></Link>
        <div className='info'>
            {/* graph goes here */}
            <div className='stats'>
                <h4>Total positive cases: {props.state.positive}</h4>
                <h4>Total negative cases: {props.state.negative}</h4>
                <h4>Total recovered: {props.state.recovered}</h4>
                <h4>Total tests: {props.state.totalTestResults}</h4>
            </div>
            <div className='button-container'>
                <Link to='/stats'>Back to all stats</Link>
                <button onClick={() => props.delete(props.state.state)}>Delete from profile</button>
            </div>
        </div>
    </div>
    )
}

//<button onClick={() => (props.handleDelete)}>Delete</button>