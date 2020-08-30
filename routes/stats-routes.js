const express = require('express')
const statsRouter = express.Router()

const authHelpers = require('../services/auth/auth-helpers')
const statsController = require('../controllers/stats-controller')
const covidData = require('../services/covid-data-helpers')
const covidDataHelpers = require('../services/covid-data-helpers')

//GET /stats - returns all US Totals Data
statsRouter.get('/', covidDataHelpers.getUSTotals, (req, res) => {
    res.json(res.locals)
})


module.exports = statsRouter