const request = require('request')
// const url = 'https://api.darksky.net/forecast/a9c996115d5f21a87b9d1d4c1b48c75e/'

const forecast = (latitude, longitude, callback) => {
   const url =  `https://api.darksky.net/forecast/a9c996115d5f21a87b9d1d4c1b48c75e/${latitude},${longitude}`

   request({ url, json: true }, (error, { body }) => {
       if (error) {
            callback('Unable to connect to weather service', undefined)
       } else if (body.error) {
            callback('Unable to find location', undefined)
       } else {
          callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
     }
   })
}

module.exports = forecast