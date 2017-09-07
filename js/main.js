$(document).ready(function () {

  $('.celsius').css({'color': 'white'});
  $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');

  var endUnit = "C";

  //Get Latitude and Longitude

  function success(pos) {
    var crds = pos.coords

    var lat = crds.latitude;
    var lon = crds.longitude;
    
    getGoogle(lat, lon);

  }

  function error(pos) {

    var url = "https://ipinfo.io/geo";
    $.getJSON(url, function(response){
      var loc = response.loc.split(',');
      var lat = loc[0];
      var lon = loc[1];
      
      getGoogle(lat, lon);
    });
    
  }

  navigator.geolocation.getCurrentPosition(success, error);



  function getGoogle(lat, lon) {
    
        var address = `${lat},${lon}`;
    
        $.getJSON(`https://cors-anywhere.herokuapp.com/http://maps.googleapis.com/maps/api/geocode/json?address=${address}`, function (response) {
        var city = response.results[4].address_components[0].long_name;
        displayWeather(lat, lon, city);
        });
}


  function displayWeather(lat, lon, city) {

    var full_API_Link = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&units=imperial&APPID=1ce9a2bb38fce8615c8ceb3367baf542";
    $.getJSON(full_API_Link, function (response) {

      var icon = response.weather[0].icon;
      var description = response.weather[0].description;
      var temp_f = Math.round(response.main.temp);
      var country = response.sys.country;
      // var city = response.name;

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

      $('.celsius').on('click', function () {
        units = "&units=metric";
        endUnit = "C";
        var celsius = Math.round((temp_f - 32) * 0.5556);
        $('.tempTag').html(celsius + "°" + endUnit);
        $(this).css({'color': 'white'});
        $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');
      });


      $('.farenheit').on('click', function () {
        units = "&units=imperial";
        endUnit = "F";
        $('.tempTag').html(temp_f + "°" + endUnit);
        $(this).css({ 'color': 'white' });
        $('.celsius').css('color', 'rgba(72, 72, 72, 1.0)');
      });


      // Add to Dom
      $('.weather-place').html(icon + "<p>" + city + ", " + country + "</p><p class='tempTag'>" + Math.round((temp_f - 32) * 0.5556) + "°C" + "</p>" + "<p>" + description).fadeIn(400) + "</p>";
    });
  }


});

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