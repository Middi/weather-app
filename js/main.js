var geoAddress;
var units = "&units=metric";
var endUnit= "C";

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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      geoAddress = "api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + units +"&appid=1f3e30098d59daa0ee84d36dca533728";

      $.ajax({
        url: geoAddress,
        success: function (parsed_json) {

          var location = parsed_json.name;
          var country = parsed_json.sys.country;
          var temp_c = Math.round(parsed_json.main.temp);
          var description = parsed_json.weather[0].description;
          var icon = parsed_json.weather[0].icon;


          if (icon == '01d') {
            icon = "<i class='ion-ios-sunny-outline large'></i>";
          }
          if (icon == '01n') {
            icon = "<i class='ion-ios-moon-outline large'></i>";
          }

          if (icon == '02d') {
            icon = "<i class='ion-ios-partlysunny-outline large'></i>";
          }

          if (icon == '02n') {
            icon = "<i class='ion-ios-cloudy-night-outline large'></i>";
          }

          if (icon == '03d' || icon == '03n') {
            icon = "<i class='ion-ios-cloud-outline large'></i>";
          }

          if (icon == '04d' || icon == '04n') {
            icon = "<i class='ion-ios-cloud large'></i>";
          }

          if (icon == '09d' || icon == '09n') {
            icon = "<i class='ion-ios-rainy-outline large'></i>";

          }
          if (icon == '10d' || icon == '10n') {
            icon = "<i class='ion-ios-rainy-outline large'></i>";
          }

          if (icon == '11d' || icon == '11n') {
            icon = "<i class='ion-ios-thunderstorm-outline large'></i>";
          }

          if (icon == '13d' || icon == '13n') {
            icon = "<i class='ion-ios-snowy large'></i>";
          }

          if (icon == '50d' || icon == '50n') {
            icon = "<i class='ion-ios-cloud-outline large'></i>";
          }

          // Add to Dom
          $('.weather-place').html(icon + "<p>" + location + ", " + country + "</p><p>" + temp_c + "°" + endUnit + "</p>" + "<p>" + description).fadeIn(400) + "</p>";

        }
      })
    })
  }
  }

// Get time and change background
var currentTime = new Date().getHours();

if (7 <= currentTime && currentTime < 20) {
  if (document.body) {
    document.body.background = "https://static.pexels.com/photos/38989/pexels-photo-38989.jpeg";
  }
}
else {
  if (document.body) {
    document.body.background = "https://static.pexels.com/photos/94363/pexels-photo-94363.jpeg";
  }
}

