const path = require('path')
const express = require('express')
const { request } = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const foreCast = require('./utils/forecast')

const app = express()

// Define the path
const publicDirectory = path.join(__dirname, '../public')
const viewsDiretory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')
const port = 3000

// Setup handlebars and views directory
app.set('view engine', 'hbs') 
app.set('views',  viewsDiretory);
hbs.registerPartials(partialsDirectory)

//Setup a location to serve static files
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
      title: 'Weather',
      name: 'Pratush Rai',
      message: 'Hello World'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
      title: 'About',
      name: 'Pratush Rai'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
      message: 'How Can I Help You?',
      title: 'Help',
      name: 'Pratush Rai'
    })
})

app.get('/weather', (req, res) => {

    if (req.query.address){
       geocode(req.query.address, (error, {latitude, longitude} = {}) => {

         if (error){
           res.send({
             error: error
           })

         }else{
       foreCast(latitude, longitude, (error,  {weatherDescription, temprature, feelsLike} = {}) => {
         if(error){
           res.send({
             error: error
           })

         }else{
           res.send({
             temprature: temprature,
             weatherDescription: weatherDescription,
             feelsLike: feelsLike
           })
         }
            })
         }
       })

  }else{
    res.send({
      error: 'You should provide an address.'
    })
  }
})


app.get('/help/*', (req, res) => {
    res.render('404page', {
      message: 'Help article not found',
      title: '404',
      name: "Pratush Rai"
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
      message: 'Page not found',
      title: '404',
      name: "Pratush Rai"
    })
})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
})