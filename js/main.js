var units = "&units=metric";
var endUnit = "C";

jQuery(function ($) {
  // farenheit or celsius
  $('.celsius').on('click', function () {
    units = "&units=metric";
    endUnit = "C";
    $(this).css({'color': 'white'});
    $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');
    weather();
  });

  $('.farenheit').on('click', function () {
    units = "&units=imperial";
    endUnit = "F";
    $(this).css({'color': 'white'});
    $('.celsius').css('color', 'rgba(72, 72, 72, 1.0)');
    weather();
  });

  // New quote on start
  $(document).ready(function () {
    $('.celsius').css({'color': 'white'});
    $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');
    weather();
  });


  function weather() {

    // Get Location
    $.getJSON('http://ip-api.com/json', function (response) {
      var city = response.city;
      var country = response.country;
      displayWeather(city, country);
    });

    // Make API URL
    function displayWeather(city, country) {
      var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
      var API_Key = "&APPID=1f3e30098d59daa0ee84d36dca533728";
      var full_API_Link = weatherAPI + city + units + API_Key;

      $.getJSON(full_API_Link, function (response) {

        // Interpret data 
        var temp_c = Math.round(response.main.temp);
        var description = response.weather[0].description;
        var icon = response.weather[0].icon;

        //Switch Icons and send to DOM
        replace(icon, city, country, temp_c, endUnit, description);
      });
    }
  }

  function replace(icon, city, country, temp_c, endUnit, description) {

    // Switch to ION icons' icon pack
    if (icon == '01d') {
      icon = "<i class='ion-ios-sunny-outline large'></i>";
    } else if (icon == '01n') {
      icon = "<i class='ion-ios-moon-outline large'></i>";
    } else if (icon == '02d') {
      icon = "<i class='ion-ios-partlysunny-outline large'></i>";
    } else if (icon == '02n') {
      icon = "<i class='ion-ios-cloudy-night-outline large'></i>";
    } else if (icon == '03d' || icon == '03n') {
      icon = "<i class='ion-ios-cloud-outline large'></i>";
    } else if (icon == '04d' || icon == '04n') {
      icon = "<i class='ion-ios-cloud large'></i>";
    } else if (icon == '09d' || icon == '09n') {
      icon = "<i class='ion-ios-rainy-outline large'></i>";
    } else if (icon == '10d' || icon == '10n') {
      icon = "<i class='ion-ios-rainy-outline large'></i>";
    } else if (icon == '11d' || icon == '11n') {
      icon = "<i class='ion-ios-thunderstorm-outline large'></i>";
    } else if (icon == '13d' || icon == '13n') {
      icon = "<i class='ion-ios-snowy large'></i>";
    } else if (icon == '50d' || icon == '50n') {
      icon = "<i class='ion-ios-cloud-outline large'></i>";
    }

    // Add to Dom
    $('.weather-place').html(icon + "<p>" + city + ", " + country + "</p><p>" + temp_c + "°" + endUnit + "</p>" + "<p>" + description).fadeIn(400) + "</p>";
  }


  // Get time and change background
  var currentTime = new Date().getHours();

  if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
      document.body.background = "images/day.jpg";
    }
  } else {
    if (document.body) {
      document.body.background = "images/night.jpg";
    }
  }
});