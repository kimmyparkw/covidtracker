import React from 'react'
import { Link } from 'react-router-dom'
import HistoricalChart from './HistoricalChart'
class StateSingle extends React.Component {
    
    showUsData = () => {
        return (
            <>
                <h1>United States COVID-19 Statistics</h1>
                <div className='info'>
                    {console.log(this.props)}
                    <HistoricalChart currentPage={this.props.currentPage} dailyChartData={this.props.dailyChartData} weeklyChartData={this.props.weeklyChartData} monthlyChartData={this.props.monthlyChartData} />
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
            <>
            
            <h1>{this.props.fullName[this.props.singleStateData.state]} COVID-19 Statistics</h1>
        <div className="stats-outer-container">
            <div className='stats-container-left'>
                <div className='chart'>
                <HistoricalChart currentPage={this.props.currentPage} key={this.props.singleStateData.hash} delete={this.props.delete} fullName={this.props.fullName} stateName={this.props.singleStateData.state} dailyChartData={this.props.singleStateHistorical} monthlyChartData={this.props.singleStateMonth} weeklyChartData={this.props.singleStateWeek}/>
                </div> 
                <div className='state-meta'>
                    <h4>State Website:</h4> 
                    <p className="state-notes"><a href={this.props.singleStateMeta.covid19Site} rel="noopener noreferrer" target='_blank'>{this.props.fullName[this.props.singleStateData.state]} Covid Data Source</a></p>
                    <h4>State Covid Twitter: <a href={`https://twitter.com/${this.props.singleStateMeta.twitter}?ref_src=twsrc%5Etfw`} rel="noopener noreferrer" target='_blank'class="twitter-follow-button" data-show-count="false">Follow {this.props.singleStateMeta.twitter}</a></h4>
                    <h4>State Notes:</h4>
                    <p className="state-notes">{this.props.singleStateMeta.notes}</p>
                    
                </div>
                <div className='button-container'>
                    <Link to='/stats'>Back to all stats</Link>
                    {this.props.userState.user && <button onClick={() => this.props.save()}>Save to profile</button>}
                    {this.props.userState.user && <Link to='/user/profile'>Back to profile</Link>}
                </div>
                
            </div>
            <div className='stats-container-right'>
                <div className='total-stats'>
                    <h3>Total positive cases: {this.props.singleStateData.positive.toLocaleString()}</h3>
                    <h3>Total negative cases: {this.props.singleStateData.negative.toLocaleString()}</h3>
                    <h3>Total recovered: {this.props.singleStateData.recovered ? this.props.singleStateData.recovered.toLocaleString() : ("Not Available")}</h3>
                    <h3>Total tests: {this.props.singleStateData.totalTestResults.toLocaleString()}</h3>
                </div>    
            </div>
        </div>    
           </>


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