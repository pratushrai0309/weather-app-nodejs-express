const request = require('request')

const foreCast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8a0eee6b0ac029ca13cca3cb2419b97c&query=${latitude},${longitude}&units=f`
  

  request({ url, json: true }, (error, {body} = {}) => {

    if(error){
      callback('You are not connected to internet', undefined)
    }else if(body.success === false){
      callback('Unable to find location')
    }else{
      callback(undefined, {
        weatherDescription: body.current.weather_descriptions[0],
        temprature: body.current.temperature,
        fellsLike: body.current.feelslike
       })
     }
  })

}

module.exports = foreCast