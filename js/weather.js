var weatherIcon;
var temperatureLow;
var temperatureHigh;
var temperatureIcon;
var weatherSummary;


window.onload = function() {
  weatherIcon = document.getElementById("weather-icon");
  temperatureLow = document.getElementById("weather-temperature-low");
  temperatureHigh = document.getElementById("weather-temperature-high");
  temperatureIcon = document.getElementById("temperature-icon");
  weatherSummary = document.getElementById("weather-summary");
}

function farenheitToCelsius(k) {
  return Math.round((k - 32) * 0.5556 );
}


var weatherImages = {
  "clear-day": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sun_icon.svg/252px-Sun_icon.svg.png",
  "clear-night": "http://www.clker.com/cliparts/f/S/2/p/7/u/gold-matte-moon.svg",
  "rain": "https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png",
  "snow": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nuvola_weather_snow.svg/1000px-Nuvola_weather_snow.svg.png",
  "sleet": "http://www.clker.com/cliparts/f/6/7/4/1206565674431593790Anonymous_simple_weather_symbols_10.svg.hi.png",
  "wind": "http://www.haotu.net/up/4233/128/216-wind.png",
  "fog": "http://www.iconninja.com/files/81/344/943/fog-cloud-hiding-the-sun-weather-interface-symbol-icon.svg",
  "cloudy": "http://camera.thietbianninh.com/images/icon-2.png",
  "partly-cloudy-day": "http://meteo.cw/images_www/weather_icons1/weather_icon_03.png",
  "partly-cloudy-night": "http://icon-park.com/imagefiles/simple_weather_icons_cloudy_night.png",
  "hail": "http://icons.iconarchive.com/icons/icons8/ios7/256/Weather-Hail-icon.png",
  "thunderstorm": "http://findicons.com/files/icons/2613/android_weather_extended/480/thunderstorms.png",
  "tornado": "http://hddfhm.com/images/clipart-of-a-tornado-11.png"
}
var day_before1;
  function showWeather(lat, long, day_before) {
    var url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    day_before1=day_before
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object);  
  }

var object;


 function displayWeather(object) {
 	var date = object.daily.data[day_before1];
    temperatureHigh.innerHTML = "Max temperature: " + farenheitToCelsius(date.temperatureHigh) + " C" + " / " + date.temperatureHigh + " F";
    temperatureLow.innerHTML = "Min temperature: " + farenheitToCelsius(date.temperatureLow) + " C" + " / " + date.temperatureLow + " F";
    temperatureIcon.src = "https://cdn4.iconfinder.com/data/icons/medicons-2/512/thermometer-512.png";
    weatherIcon.src = weatherImages[date.icon];
    weatherSummary.innerHTML = "Weather Summary: " + date.summary;
    console.log(object);
 }
