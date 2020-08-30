//maps through the list of states to
//create the list as shown on the stats page

//we passed in USdata and all state data into this component. These are our props.
import React from 'react'
import StateSingle from './StateSingle.jsx'

function StatesList(props) {
    return (
        <>
            <StateSingle usData={props.usData} />
            {props.allStateData.map((state) => {
                return <h3>{state.state}</h3>
            })}
        </>
    )
}

export default StatesList