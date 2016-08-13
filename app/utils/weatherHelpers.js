var axios = require('axios');
var c = require('../config/vars');

var helpers = {
  getCurrent: function (location) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=' + c.wKey)
                .then(function (response) {
                  return response.data;
                })
                .catch(function (err) {
                  console.warn(err);
                });
  },
  getForecast: function (location) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + c.wKey + '&cnt=5')
                .then(function (response) {
                  return response.data;
                })
                .catch(function (err) {
                  console.warn(err);
                });
  }
};

module.exports = helpers;
