import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom'
import moment from 'moment';

export default class HistoricalChart extends Component{
    constructor(props) {
        super(props)
        this.state ={
            labels: null,
                  datasets: [
                      {
                      label: 'Cases',
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 2,
                      data: null
                      }
                  ]
          }
    }

    componentDidMount() {
        this.chartDataFormatter()
    }

    chartDataFormatter = () => {
        const days = this.props.chartData.map((day) => {
            return (moment(day.date.toString()).format('MM-DD'))
          })
          const result = days.filter((date, index) => {
            return index < 30
          })
          const values = this.props.chartData.map((day) => {
            return parseInt(day.positiveIncrease)
          })
          const result2 = values.filter((date, index) => {
            return index < 30
          })
          this.setState({
            labels: result,
            datasets:[
                {
                    label: 'Cases',
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: '#45A29E',
                      borderWidth: 2,
                    data: result2
                }
            ]

          })

    }

    render() {
        return(
          <div className='profile-chart'>
            <Link to={`/stats/${this.props.stateName}`}><h2>{this.props.fullName[this.props.stateName]}</h2></Link>
            <div className='state-graph'>
                <Line
                data={this.state}
                options={{
                title:{
                    display:true,
                    text:`Confirmed and Probable Positives by Day*`,
                    fontSize:20
                  },
                legend:{
                    display:true,
                    position:'right'
                  }
                 }}
                />
            </div>
            <button onClick={() => this.props.delete(this.props.stateName)}>Delete from profile</button>
          </div>
        )
    }


}
