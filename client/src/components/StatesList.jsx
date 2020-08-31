//maps through the list of states to
//create the list as shown on the stats page

//we passed in USdata and all state data into this component. These are our props.
import React from 'react'
import StateSingle from './StateSingle.jsx'
import State from './State.jsx'

function StatesList(props) {
    return (
        <>
            <StateSingle usData={props.usData} />
            {props.allStateData.map((state, i) => {
                return <h3 key={i}>{props.fullName[state.state]}</h3>
            })}
        </>
    )
}

export default StatesList





//when we click on a pineapple,
//we want to change the state of the page to 'show'
//have the page rerender to show that particular state's data using the StateSingle component
//use the getSingleState function
//