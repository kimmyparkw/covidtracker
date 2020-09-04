import React from 'react'
import { Link } from 'react-router-dom'
import StateSingle from './StateSingle.jsx'

function StatesList(props) {
    return (
        <>
            <div className='info-container'>
                <StateSingle currentPage={props.currentPage} dailyChartData={props.usDaily} weeklyChartData={props.usWeek} monthlyChartData={props.usMonth} usData={props.usData} />
            </div>
            <div className="state-list-container">
                <h1>States and Territories</h1>
                <div className='state-list'>
                    {props.allStateData.map((state) => {
                        return <Link to={`/stats/${state.state}`} key={state.hash}><h3>{props.fullName[state.state]}</h3></Link>
                    })}
                </div>
            </div>
            
        </>
    )
}

export default StatesList
