import React, {Component} from 'react';
<<<<<<< HEAD:client/src/components/HistoricalChart.jsx
import {Line, Bar} from 'react-chartjs-2';
=======
import {Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom'
>>>>>>> dac197f6349e8b0b78e8a3eeea22f472f5476e91:client/src/components/data/HistoricalChart.jsx
import moment from 'moment';

class HistoricalChart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      labels: null,
      result: null,
      result2: null,
      result3: null,
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
    }).reverse()
    const values = this.props.chartData.map((day) => {
      return parseInt(day.positiveIncrease)
    })
    const result2 = values.filter((date, index) => {
      return index < 30
    }).reverse()
      
      
    
    const values2 = this.props.chartData.map((day) => {
      return parseInt(day.totalTestResultsIncrease)
    })
    const result3 = values2.filter((date, index) => {
      return index < 30
    }).reverse()
    
    this.setState({
      result3: result3,
      result2: result2,
      result: result,
    })
      
    

<<<<<<< HEAD:client/src/components/HistoricalChart.jsx
  }
  
  render() {
    this.data = {
      labels: this.state.result,
      datasets: [
        {
          label: "Positive Cases",
          data: this.state.result2,
          fill: false,
          backgroundColor: "rgba(75,0,192,0.8)",
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: "rgba(75,192,192,1)",
          
        },
        {
          label: "Total Daily Tests",
          data: this.state.result3,
          fill: true,
          backgroundColor: "rgba(0,88,0,0.8)",
          borderColor: "#742774",
          
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
            suggestMin: 0,
            beginAtZero: true,
            stacked: true,
            ticks: {
              
              min: 0,
            }
            
          }
        ],
        xAxes: [
          {
            min: 0,
            beginAtZero: true,
            stacked: true,
          }
        ]
      }
    };
    return (
      <div>
        {console.log(this.data.labels)}
      <Bar data={this.data} legend={this.legend} options={this.options} />
      </div>)
  }
=======
    render() {
        return(
          <>
            <Link to={`/stats/${this.props.stateName}`}><h2>{this.props.fullName[this.props.stateName]}</h2></Link>
            <div>
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
          </>
        )
    }
>>>>>>> dac197f6349e8b0b78e8a3eeea22f472f5476e91:client/src/components/data/HistoricalChart.jsx


}

export default HistoricalChart