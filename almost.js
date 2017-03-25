/****
 *
 * Dev Name:     Uways Eid.
 * Course:       Free Code Camp.
 * Challenge:    Show the Local Weather
 * 
 * Code is supplemented with internal documentation.  
 * If there is anything wrong with my internal documentation, please feel free to let me know.
 *
 **/
// NOTE: For testing purposes: console.log(response)

$(document).ready(function () {
   
        $('.celsius').css({'color': 'white'});
    $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');



    var units = "&units=metric";
var endUnit = "C";
    
    $('.celsius').on('click', function () {
    units = "&units=metric";
    endUnit = "C";
    $(this).css({'color': 'white'});
    $('.farenheit').css('color', 'rgba(72, 72, 72, 1.0)');

  });

  $('.farenheit').on('click', function () {
    units = "&units=imperial";
    endUnit = "F";
    $(this).css({'color': 'white'});
    $('.celsius').css('color', 'rgba(72, 72, 72, 1.0)');

  
  });
    

 
 
            $.getJSON('http://ip-api.com/json', function (response) {
        var city = response.city;
        var country = response.country;
        displayWeather(city, country);
    });

    

    
    function displayWeather(city, country) {

                          console.log(units);
        var full_API_Link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=1ce9a2bb38fce8615c8ceb3367baf542";
        
        $.getJSON(full_API_Link, function (response) {
            
            var icon = response.weather[0].icon;
            var description = response.weather[0].description;
            var temp_c = Math.round(response.main.temp);

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
        });
    }
    
    
//     function weatherIconGen(weatherMain) {
//         switch (weatherMain) {
//         case 'Dizzle':
//             $(".fa").addClass("fa-soundcloud"); // Yes, laugh as much as you want.
//             break;
//         case 'Clouds':
//             $(".fa").addClass("fa-cloud");
//             break;
//         case 'Rain':
//             $(".fa").addClass("fa-cloud-download");
//             break;
//         case 'Snow':
//             $(".fa").addClass("fa-asterisk");
//             break;
//         case 'Clear':
//             $(".fa").addClass("fa-sun-o");
//             break;
//         case 'Thunderstom':
//             $(".fa").addClass("fa-bolt");
//             break;
//         default:
//             $(".fa").addClass("fa-sun-o");
//         }
//     } //----End-weatherIconGen
    
    // function toggle_f(c) {
    //     var c = c;
    //     var f = Math.round((c * 9) / 5 + 32);
    //     $('button').click(function () {
    //         var nowVal = $("#Temp_Info").val();
    //         //The value before the .click() is "null" so "else" statment will be used, then the .val() of else will set the nowVal to "f" and nowVal will have a value of "f".
    //         if (nowVal == "f") {
    //             $("#Temp_Info").text(c).val("c");
    //         }
    //         else {
    //             $("#Temp_Info").text(f).val("f");
    //         }
    //     });
    // } //----End-toggle_f
}); //----End-Doc.ready
// -----------------------------------------------------------------------