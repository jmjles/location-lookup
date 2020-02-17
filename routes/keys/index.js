const route = require('express').Router()
const auth = require('../auth.js')
route.get('/',auth,(req,res)=>{
    res.status(200).json({
      google: process.env.GOOGLE,
      news: process.env.NEWS,
      time: process.env.TIME,
      weather: process.env.WEATHER
    });
})
module.exports = route