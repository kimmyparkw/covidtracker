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

    getAllStates = () => {
        fetch('/api/stats') 
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allStateData: res.data.stateTotals,
            })
        })
    }

    getUsData = () => {
        fetch('/api/stats')
        .then(res => res.json())
        .then(res => {
            this.setState({
                usData: res.data.countryTotals,
                isLoaded: true,
            })
        })
    }

    getSingleState = () => {
        fetch(`/api/stats/${currentState}`)
    }

    componentDidMount() {

    }

    handleDelete = () => {

    }

    render() {
        return (
            "hello world"
        )
    }
}

export default StateController