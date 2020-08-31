import React from 'react'

function StateSingle(props) {
    console.log(props)
    return (
        <>
            <h1>United States COVID-19 Statistics</h1>
            <h4>Total positive cases: {props.singleStateData.positive}</h4>
            <h4>Total negative cases: {props.singleStateData.negative}</h4>
            <h4>Total recovered: {props.singleStateData.recovered}</h4>
            <h4>Total tests: {props.singleStateData.totalTestResults}</h4>
        </>
    )
}



export default StateSingle