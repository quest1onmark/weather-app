const yargs = require('yargs');
const axios = require('axios');
const settings = require('./settings');
const tuc = require('temp-units-conv');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'Address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

// IMPORTANT : Ich mach nebem project no e udemy kurs, das isch e projekt vo dem Kurs. Du muesch no e "settings.js" erstelle, welles direkt im weather-app ordner isch.
// settings.js inhalt:
// const mapApiKey = 'AIzaSyCmINRzUHFHQ1h1R-XXtxGnRtD0L9oP0f4';
// const weatherApiKey = '3ca00b3f1f3754e208017b5a39b4274c';
//
// module.exports = {
//     mapApiKey,
//     weatherApiKey
// };

// IMPORTANT : das isch mi code, wo gestert no funtioniert het
// axios
//   .get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=${settings.mapApiKey}`
//   )
//   .then(response => {
//     return axios
//       .get(
//         `https://api.darksky.net/forecast/${settings.weatherApiKey}/${response.data.results[0].geometry.lat},${
//           response.data.results[0].geometry.lng
//         }`
//       )
//       .then(response => {
//         console.log(`weather for ${response.data.results[0].formatted_address}\nit's currently ${tuc.fahrenheitToCelsius(response.data.currently.temperature)}`)
//       });
//   })
//   .catch(e => {
//     console.log('an error occurred: ', e)
//   });

// IMPORTANT : das isch de code vom instructor wo söt funktioniere
// axios.get(`https:maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=${settings.mapApiKey}`).then((response) => {
//     if (response.data.status === 'ZERO_RESULTS') {
//         throw new Error('Unable to find that address.');
//     }
//
//     const lat = response.data.results[0].geometry.location.lat;
//     const lng = response.data.results[0].geometry.location.lng;
//     const weatherUrl = `https://api.darksky.net/forecast/${settings.weatherApiKey}/${response.data.results[0].geometry.lat},${
//            response.data.results[0].geometry.lng
//         }`;
//     console.log(response.data.results[0].formatted_address);
//     return axios.get(weatherUrl);
// }).then((response) => {
//     const temperature = response.data.currently.temperature;
//     const apparentTemperature = response.data.currently.apparentTemperature;
//     console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
// }).catch((e) => {
//     if (e.code === 'ENOTFOUND') {
//         console.log('Unable to connect to API servers.');
//     } else {
//         console.log(e.message);
//     }
// });

// IMPORTANT : d'http request laufe mit "request"
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         weather.getWeather(results.lat, results.lng, (errorMessage, weatherResult) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else if (weatherResult.temperature !== weatherResult.apparentTemperature) {
//                 console.log(
//                     `weather for ${results.address.toLowerCase()}\nit's currently ${weatherResult.temperature}. it feels like ${
//                         weatherResult.apparentTemperature
//                         }`
//                 );
//             } else {
//                 console.log(`it's currently ${weatherResult.temperature}`);
//             }
//         });
//     }
// });