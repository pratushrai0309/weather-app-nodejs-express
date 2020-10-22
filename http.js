const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=8a0eee6b0ac029ca13cca3cb2419b97c&query=40,-75&units=f`

let data = ''

const request = http.request(url, (res) => {
   
  res.on('data', (chunk) => {
    data = data + chunk.toString()
     console.log(chunk);
  })

  res.on('end', () =>{
    const body = JSON.parse(data)
     console.log(body);
  })
})

request.end()