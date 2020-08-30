import React from 'react'

class StateController extends React.Component {
    constructor() {
        super()
        this.state=({
            isLoaded: false,
            allStateData: null,
            singleStateData: null,
            usData: null,
            currentPage: '',
            fireRedirect: false,
            redirectPath: null,
        })
    }

    getAllData = () => {
        fetch('/stats') 
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allStateData: res.data.stateTotals,
                usData: res.data.countryTotals,
            })
        })
    }

    getSingleState = (id) => {
        fetch(`/stats/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("single state", res)
            this.setState({
                singleStateData: res.data,
                dataLoaded: true,
            })
        })
    }

    componentDidMount() {
        if (this.state.currentPage === 'index') {
            this.getAllData()
        } else if (this.state.currentPage === 'show') {
            this.getSingleState()
        }
    }

    handleDelete = (id) => {
        fetch(`/user/stats/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("delete res", res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
        })
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            case 'index':
                return <StatesList usData={this.state.usData} allStateData={this.state.allStateData}/>
            case 'show':
                return <StateSingle singleStateData={this.state.singleStateData}/>
        }
    }

    render() {
        return (
            <div className="container">
                {dataLoaded ? this.decideWhichToRender() : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default StateController