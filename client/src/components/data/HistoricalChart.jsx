import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import moment from 'moment';

class HistoricalChart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      labels: null,
      xAxis: null,
      yAxisRight: null,
      yAxisLeft: null,
      dataRange: 30,
    }
  }
    
  componentDidMount() {
    this.chartDataFormatter()
  }
  
  clickBtn = (e) => {
    this.setState({ dataRange: this.state.dataRange + parseInt(e.target.value) }, this.chartDataFormatter)
  }
 
  chartDataFormatter = () => {
    const days = this.props.chartData.map((day) => {
      return (moment(day.date.toString()).format('MM-DD'))
    })
    const xAxis = days.filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()
    
    const yAxisRight = this.props.chartData.map((day) => {
      return parseInt(day.totalTestResultsIncrease)
    }).filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()
    
    const yAxisLeft = this.props.chartData.map((day) => {
      return parseInt((day.positiveIncrease / day.totalTestResultsIncrease) * 100)
    }).filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()

    this.setState({
      yAxisRight: yAxisRight,
      yAxisLeft: yAxisLeft,
      xAxis: xAxis,
      
    })

    
  
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
          borderColor: "#1D3557",
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
          backgroundColor: "#A8DADC",
          borderColor: "#457B9D",
          yAxisID: 'y-axis-1',
        }
      ]
    };
    
   this.legend = {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#323130",
        fontSize: 14
      }
    };
    
    this.options = {
      tooltips: { enabled: true },
      duration: 500,
      title: {
        display: true,
        text: `${this.props.stateName} Confirmed and Probable Positives by Day*`
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
          <>
            
            <div>
              <div>
                <button value={30} onClick={this.clickBtn}>+30 Days</button><button value={-30} onClick={this.clickBtn}>-30 Days</button>
                <Bar width={450} className='stateChart' data={this.data} legend={this.legend} options={this.options} state={this.state}/>
              </div>
            </div>
              
          </>
        )
    }


}

export default HistoricalChart