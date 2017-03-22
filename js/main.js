

$(document).ready(function($) {
   $.ajax({
        url: "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1",
  success : function(parsed_json) {
  var location = parsed_json.name;
  var country = parsed_json.sys.country;
  var temp_c = Math.round(parsed_json.main.temp);
  var clouds = parsed_json.clouds.all;
  var description = parsed_json.weather[0].description;
  var icon = parsed_json.weather[0].icon;
  

if(icon == '09d') {

icon = "<i class='ion-ios-rainy-outline large'></i>";
};

console.log(clouds);
  $('.weather-place').html(icon +"<p>" + location + ", " + country + "</p><p>" + temp_c + "°C</p>" + "</p><p>" + description).fadeIn(400);

  }
  });
});



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

