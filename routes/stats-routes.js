const express = require('express')
const statsRouter = express.Router()

const authHelpers = require('../services/auth/auth-helpers')
const covidDataHelpers = require('../services/covid-data-helpers')

//GET /stats - returns all US Totals Data
statsRouter.get('/', covidDataHelpers.getUSTotals, covidDataHelpers.getStateTotals, (req, res) => {
    res.json(res.locals)
})

//GET /stats/:id - return selected State Data - two letter state code required (ex: GA, CA)
statsRouter.get('/:id', covidDataHelpers.getSingleStateDetails, covidDataHelpers.getSingleStateHistoricals, (req, res) => {
    res.json(res.locals)
})

module.exports = statsRouter