const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ddc6fc2ca5fcfc05d5e645007d358419/' + latitude +',' + longitude ;

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to conect to weather service!', undefined);
        }else if(body.error){
            callback('Unable to find location!', undefined)
        } else{
            callback(undefined, body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degree out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + ' % chance of rain');
        }
    })
}

module.exports = forecast