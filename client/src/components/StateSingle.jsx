import React from 'react'
import { Link } from 'react-router-dom'

class StateSingle extends React.Component {
    
    showUsData = () => {
        return (
            <>
                <h1>United States COVID-19 Statistics</h1>
                <div className='info'>
                    {/* graph goes here */}
                    <div className='stats'>
                        <h4>Total positive cases: {this.props.usData.positive}</h4>
                        <h4>Total negative cases: {this.props.usData.negative}</h4>
                        <h4>Total recovered: {this.props.usData.recovered}</h4>
                        <h4>Total tests: {this.props.usData.totalTestResults}</h4>
                    </div>
                </div> 
            </>
        )
    }

    showStateData = () => {
        return (
            <div className='info-container'>
                <h1>United States COVID-19 Statistics</h1>
                <div className='info'>
                    {/* graph goes here */}
                    <div className='stats'>
                        <h4>Total positive cases: {this.props.singleStateData.positive}</h4>
                        <h4>Total negative cases: {this.props.singleStateData.negative}</h4>
                        <h4>Total recovered: {this.props.singleStateData.recovered}</h4>
                        <h4>Total tests: {this.props.singleStateData.totalTestResults}</h4>
                    </div>
                    <div className='button-container'>
                        <Link to='/stats'>Back to all stats</Link>
                        {this.props.userState.user && <Link to='/user/profile'>Back to profile</Link>}
                    </div>
                </div>
            </div>

        )
    }

    render() {
        return (
            <>
                {(this.props.currentPage === 'index' || this.props.currentPage ==='profile') && this.showUsData()}
                {this.props.currentPage === 'show' && this.showStateData()}

            </>
        )
    }

}



export default StateSingle