import React from 'react'

class StateSingle extends React.Component {
    constructor(props) {
        super(props)  
    }
    
    showUsData = () => {
        return (
            <div>
                <h1>United States COVID-19 Statistics</h1>
                <h4>Total positive cases: {this.props.usData.positive}</h4>
                <h4>Total negative cases: {this.props.usData.negative}</h4>
                <h4>Total recovered: {this.props.usData.recovered}</h4>
                <h4>Total tests: {this.props.usData.totalTestResults}</h4>
            </div>
        )
    }

    showStateData = () => {
        return (
            <div>
                <h1>United States COVID-19 Statistics</h1>
                <h4>Total positive cases: {this.props.singleStateData.positive}</h4>
                <h4>Total negative cases: {this.props.singleStateData.negative}</h4>
                <h4>Total recovered: {this.props.singleStateData.recovered}</h4>
                <h4>Total tests: {this.props.singleStateData.totalTestResults}</h4>
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