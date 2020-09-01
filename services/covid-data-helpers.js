require('dotenv').config();
require("express");
const fetch = require('node-fetch');
const db = require('../db/config');
const UserStates = require('../models/User-States');
const e = require('express');


const USTotalsURL = 'https://api.covidtracking.com/v1/us/current.json';
const stateTotalsURL = 'https://api.covidtracking.com/v1/states/current.json';

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
        // console.log(res)
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
        // console.log(req.params.id)
        let covidData = data;
        res.locals.singleState = covidData;
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })

}

const getHistoricalDetails = (req, res, next) => {
    let historicalData = []
    UserStates.getAllByUserId(req.user.id)
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
        console.log(data)
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
    getHistoricalDetails
}