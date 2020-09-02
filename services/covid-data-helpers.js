require('dotenv').config();
require("express");
const moment =  require('moment');
const fetch = require('node-fetch');
const UserStates = require('../models/User-States');


const USTotalsURL = 'https://api.covidtracking.com/v1/us/current.json';
const stateTotalsURL = 'https://api.covidtracking.com/v1/states/current.json';

const dateHelper = (data, datePart) => {
    const output = data.reduce((accum, current) => {
        const date = moment(current.date.toString()).startOf(datePart).format('MM-DD');
        if(!accum[date]){
            accum[date] = [current.positiveIncrease, current.totalTestResultsIncrease]
        }
        else{
            accum[date][0] += current.positiveIncrease
            accum[date][1] += current.totalTestResultsIncrease
        }
        return accum
    }, {})
    return output
}

const getUSTotals = (req, res, next) => {
    fetch(`${USTotalsURL}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        let covidData = data;
        res.locals.usTotals = covidData[0];
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
}

const getStateTotals = (req, res, next) => {
    fetch(`${stateTotalsURL}`)
    .then((res) => res.json())
    .then((data) => {
        let covidData = data;
        res.locals.stateTotals = covidData;
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
}

const getSingleStateDetails = (req, res, next) => {
    fetch(`https://api.covidtracking.com/v1/states/${req.params.id}/current.json`)
    .then((res) => res.json())
    .then((data) => {
        let covidData = data;
        res.locals.singleState = covidData;
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })

}

const getSingleStateHistoricals = (req, res, next) => {
    fetch(`https://api.covidtracking.com/v1/states/${req.params.id}/daily.json`)
    .then((res) => res.json())
    .then((data) => {
        let covidData = data;
        let month = dateHelper(covidData, 'month');
        let week = dateHelper(covidData, 'week')
        res.locals.singleStateMonth = month;
        res.locals.singleStateWeek = week;
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })

}

const getHistoricalDetails = (req, res, next) => {
    UserStates.getDistinctStatesByUser(req.user.id)
    .then((userStates) => {
        console.log(userStates)
        const fetches = userStates.map((userState) => {
            return fetch(`https://api.covidtracking.com/v1/states/${userState}/daily.json`)
        })
        console.log(fetches)
        return Promise.all(fetches)
        
    })
    .then((res) => {
        return Promise.all(res.map((el) => {
            return el.json()
        }))
    })
    .then((data) => {
        const covidData = data;
        res.locals.stateTotals = covidData;
        console.log(res.locals.stateTotals)
        next()
    })     
    .catch((err) => {
        console.log(err);
        next(err);
    })
}


module.exports = {
    getUSTotals,
    getStateTotals,
    getSingleStateDetails,
    getSingleStateHistoricals,
    getHistoricalDetails
}

