

const weatherForm = document.querySelector('form')
const address = document.getElementById('address')
const temprature = document.getElementById('temprature')
const weather = document.getElementById('weather')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = address.value
    temprature.textContent = 'Loading....'
    weather.textContent = ''
    fetch(`/weather?address=${location}`).then((response) => {
  response.json().then((data) => {  
    if(data.error){
      temprature.textContent = data.error
      weather.textContent = ''
    }else{
      temprature.textContent = 'Its ' + data.temprature + ' fahrenheit out there'
      weather.textContent = 'Weather Description: ' + data.weatherDescription
    }
  })
})

})





