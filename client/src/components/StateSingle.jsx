import React from 'react'

function StateSingle(props) {
    console.log(props)
    return (
        <>
            <h1>United States COVID-19 Statistics</h1>
            <h4>Total positive cases: {props.usData.positive}</h4>
            <h4>Total negative cases: {props.usData.negative}</h4>
            <h4>Total recovered: {props.usData.recovered}</h4>
            <h4>Total tests: {props.usData.totalTestResults}</h4>
        </>
    )
}



export default StateSingle