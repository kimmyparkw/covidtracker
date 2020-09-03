import React from 'react'
import { Link } from 'react-router-dom'
import HistoricalChart from './HistoricalChart'
class StateSingle extends React.Component {
    
    showUsData = () => {
        return (
            <>
                <h1>United States COVID-19 Statistics</h1>
                <div className='info'>
                    {/* graph goes here */}
                    <div className='stats'>
                        <h4>Total positive cases: {this.props.usData.positive.toLocaleString()}</h4>
                        <h4>Total negative cases: {this.props.usData.negative.toLocaleString()}</h4>
                        <h4>Total recovered: {this.props.usData.recovered.toLocaleString()}</h4>
                        <h4>Total tests: {this.props.usData.totalTestResults.toLocaleString()}</h4>
                    </div>
                </div> 
            </>
        )
    }

    showStateData = () => {
        return (
            <div className='info-container'>
                <h1>{this.props.fullName[this.props.singleStateData.state]} COVID-19 Statistics</h1>
                <div className='info'>
                    <HistoricalChart key={this.props.singleStateData.hash} delete={this.props.delete} fullName={this.props.fullName} stateName={this.props.singleStateData.state} chartData={this.props.singleStateHistorical} />
                    <div className='stats'>
                        <h4>Total positive cases: {this.props.singleStateData.positive.toLocaleString()}</h4>
                        <h4>Total negative cases: {this.props.singleStateData.negative.toLocaleString()}</h4>
                        <h4>Total recovered: {this.props.singleStateData.recovered.toLocaleString()}</h4>
                        <h4>Total tests: {this.props.singleStateData.totalTestResults.toLocaleString()}</h4>
                    </div>
                    <div className='state-meta'>
                        <h4>State Website: {this.props.singleStateMeta.covid19Site}</h4>
                        <h4>State Covid Twitter: {this.props.singleStateMeta.twitter}</h4>
                        <h4>State Notes: {this.props.singleStateMeta.notes}</h4> 
                    </div>
                    <div className='button-container'>
                        <Link to='/stats'>Back to all stats</Link>
                        {this.props.userState.user && <button onClick={() => this.props.save()}>Save to profile</button>}
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