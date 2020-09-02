import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom'
import moment from 'moment';

class HistoricalChart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      labels: null,
      result: null,
      result2: null,
      result3: null,
      dataRange: 30,
    }
    
  }
    
    componentDidMount() {
      this.chartDataFormatter()
    }
  
  clickBtn = (e) => {
    this.setState({ dataRange: this.state.dataRange + e.target.value })
    console.log(this.state.dataRange, e.target.value)
    this.chartDataFormatter()
   }
  
  chartDataFormatter = () => {
    const days = this.props.chartData.map((day) => {
      
      return (moment(day.date.toString()).format('MM-DD'))
    })
    const result = days.filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()
    
    const values2 = this.props.chartData.map((day) => {
      return parseInt(day.totalTestResultsIncrease)
    })
    const result3 = values2.filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()
    
    const values = this.props.chartData.map((day) => {
      return parseInt((day.positiveIncrease / day.totalTestResultsIncrease) * 100)
    })
    const result2 = values.filter((date, index) => {
      return index < this.state.dataRange
    }).reverse()

    this.setState({
      result3: result3,
      result2: result2,
      result: result,
      dataRange: this.state.dataRange + 30
    })
  
  }
  
  render() {
    this.data = {
      labels: this.state.result,
      datasets: [
        { 
          label: "% Positive Cases",
          type: 'line',
          data: this.state.result2,
          fill: false,
          backgroundColor: "#1D3557",
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: "#1D3557",
          yAxisID: 'y-axis-2',
          borderWidth: 1,
          pointRadius: 1.5, 
        },
        {
          label: "Daily Tests",
          type: 'bar',
          data: this.state.result3,
          fill: true,
          backgroundColor: "#A8DADC",
          borderColor: "#457B9D",
          yAxisID: 'y-axis-1'
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
      easing: 'string',
      title: {
        display: true,
        text: `${this.props.stateName} Confirmed and Probable Positives by Day*`
      },
      scales: {
        yAxes: [
          {
            type: 'linear',
            scaleLabel: {
              fontColor: 'red',
              labelString: "Test"
            }
            ,
            display: true,
            position: 'left',
            id: 'y-axis-2',
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
            display: true,
            position: 'right',
            id: 'y-axis-1',
            gridLines: {
              display: true
            },
            labels: {
              show: true
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
            <Link to={`/stats/${this.props.stateName}`}><h2>{this.props.fullName[this.props.stateName]}</h2></Link>
            <div>
              <div>
                <button value='30' onClick={this.clickBtn}>+30 Days</button><button value='-30' onClick={this.clickBtn}>-30 Days</button>
                <Bar data={this.data} legend={this.legend} options={this.options} state={this.state}/>
                <p>You clicked {this.state.dataRange}{console.log("Console", this.state.dataRange)}</p>
              </div>
            </div>
              <button onClick={() => this.props.delete(this.props.stateName)}>Delete from profile</button>
          </>
        )
    }


}

export default HistoricalChart