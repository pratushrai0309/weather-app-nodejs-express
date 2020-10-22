const { error } = require('console')
const geocode = require('./utils/geocode.js')
const foreCast = require('./utils/forecast.js')

const location = process.argv[2]

geocode(location, (error, {latitude, longitude} = {}) => {


  if(location){
    if(error){
      return console.log(`Error: ${error}`)
   }
   
 
     foreCast(latitude, longitude, (error, {temprature}) => {
 

       if(error){
         return console.log(error);
       }
       console.log(`The temprature in ${location} is ${temprature} farenhiet`)
   })
 
  }else{
    console.log('Please provide a location');
  }

})
