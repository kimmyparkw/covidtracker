import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom'
import moment from 'moment';

class HistoricalChart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      labels: null,
      xAxis: null,
      yAxisRight: null,
      yAxisLeft: null,
      dataView: 'Day',
    }
  }
  
  componentDidMount() {
    this.chartDataFormatter()
  }
  
  clickBtn = (e) => {
    if (e.target.value === 'Month') {
      this.setState({ chartData: this.props.monthlyChartData })
    } else if (e.target.value === 'Week') {
      this.setState({ chartData: this.props.weeklyChartData })
    } else if (e.target.value === 'Day') {
      this.setState({ chartData: this.props.dailyChartData })
    }
    this.setState({ dataView: e.target.value }, this.chartDataFormatter)
    
  }
 
  chartDataFormatter = () => {
    if (this.state.dataView === 'Day') {
    const xAxis = this.props.dailyChartData.map((day) => {
      return (moment(day.date.toString()).format('MM-DD'))
    }).filter((date, index) => {
      return index < 30
    }).reverse()
    
    const yAxisRight = this.props.dailyChartData.map((day) => {
      return parseFloat(day.totalTestResultsIncrease)
    }).filter((date, index) => {
      return index < 30
    }).reverse()
    
    const yAxisLeft = this.props.dailyChartData.map((day) => {
      return parseFloat((day.positiveIncrease / day.totalTestResultsIncrease) * 100).toFixed(2)
    }).filter((date, index) => {
      return index < 30
    }).reverse()

    this.setState({
      yAxisRight: yAxisRight,
      yAxisLeft: yAxisLeft,
      xAxis: xAxis,
      
    })
    } else if (this.state.dataView === 'Month' || 'Week') {
     
      const xAxis = Object.keys(this.state.chartData).map((el) => {
        return el
      }).reverse()
      
      const yAxisRight = Object.values(this.state.chartData).map((el) => {
        return el[1]
      }).reverse()
      
      const yAxisLeft = Object.values(this.state.chartData).map((el) => {
        return ((el[0] / el[1]) * 100).toFixed(2)
      }).reverse()
  
      this.setState({
        yAxisRight: yAxisRight,
        yAxisLeft: yAxisLeft,
        xAxis: xAxis,
        
      })
      } 

  }
  
  render() {
    this.data = {
      labels: this.state.xAxis,
      datasets: [
        { 
          label: "% Test Results Positive",
          type: 'line',
          data: this.state.yAxisLeft,
          fill: false,
          backgroundColor: "#1D3557",
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: "#66FCF1",
          yAxisID: 'y-axis-2',
          borderWidth: 1,
          pointRadius: 1.5, 
          spanGaps: true,
        },
        {
          label: "Daily Tests",
          type: 'bar',
          data: this.state.yAxisRight,
          fill: true,
          backgroundColor: "#324052",
          borderColor: "#C5C6C7",
          yAxisID: 'y-axis-1',
        }
      ]
    };
    
   this.legend = {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#C5C6C7",
        fontSize: 14
      }
    };
    
    this.options = {
      tooltips: {enabled: true},
      duration: 500,
      title: {
        display: true,
        fontSize: 18,
        text: `${this.props.stateName || 'US'} Confirmed and Probable Positives by ${this.state.dataView}*`
      },
      scales: {
        yAxes: [
          {
            type: 'linear',
            position: 'left',
            id: 'y-axis-2',
            responsive: true,
            gridLines: {
              display: false
            },
            suggestedMin: 0,
            suggestedMax: 100,
            beginAtZero: true,
            stacked: true,
            ticks: {
              min: 0,
              max: 50,
              autoSkip: true,
              autoSkipPadding: 15,
              callback: function (value, index, values) {
                return value + "%";
              }
            },
          },
          {
            type: 'linear',
            position: 'right',
            id: 'y-axis-1',
            gridLines: {
              display: true
            },
            ticks: {
              min: 0,
              autoSkip: true,
              autoSkipPadding: 15,
              callback: function (value, index, values) {
                return value.toLocaleString('en');
              }
            }
          }
        ],
        xAxes: [
          {
            min: 0,
            beginAtZero: true,
            stacked: true,
            gridLines: {
              display: false,
            },
            ticks: {
              min: 0,
              autoSkip: true,
              autoSkipPadding: 25,
              
            }
          }
        ]
      }
    };
    
        return(
          <div className='profile-chart'>
            <div className='state-graph'>
              <div className='historical-buttons'>
              {(this.props.currentPage === 'show' || this.props.currentPage === 'index')  && <div><button value={'Day'} onClick={this.clickBtn}>Daily</button><button value={'Week'} onClick={this.clickBtn}>Weekly</button><button value={'Month'} onClick={this.clickBtn}>Monthly</button></div>}
              </div>
              <Bar className='stateChart' data={this.data} legend={this.legend} options={this.options} state={this.state} />
            </div>
          </div>
        )
    }
}

export default HistoricalChart