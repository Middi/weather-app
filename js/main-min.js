var units="&units=metric",endUnit="C";jQuery(function($){function i(){function i(i,o){var e="http://api.openweathermap.org/data/2.5/weather?q=",t="&APPID=1f3e30098d59daa0ee84d36dca533728",a="http://api.openweathermap.org/data/2.5/weather?q="+i+units+"&APPID=1f3e30098d59daa0ee84d36dca533728";$.getJSON(a,function(e){var t=Math.round(e.main.temp),a=e.weather[0].description;n(e.weather[0].icon,i,o,t,endUnit,a)})}$.getJSON("http://ip-api.com/json",function(n){i(n.city,n.country)})}function n(i,n,o,e,t,a){"01d"==i?i="<i class='ion-ios-sunny-outline large'></i>":"01n"==i?i="<i class='ion-ios-moon-outline large'></i>":"02d"==i?i="<i class='ion-ios-partlysunny-outline large'></i>":"02n"==i?i="<i class='ion-ios-cloudy-night-outline large'></i>":"03d"==i||"03n"==i?i="<i class='ion-ios-cloud-outline large'></i>":"04d"==i||"04n"==i?i="<i class='ion-ios-cloud large'></i>":"09d"==i||"09n"==i?i="<i class='ion-ios-rainy-outline large'></i>":"10d"==i||"10n"==i?i="<i class='ion-ios-rainy-outline large'></i>":"11d"==i||"11n"==i?i="<i class='ion-ios-thunderstorm-outline large'></i>":"13d"==i||"13n"==i?i="<i class='ion-ios-snowy large'></i>":"50d"!=i&&"50n"!=i||(i="<i class='ion-ios-cloud-outline large'></i>"),$(".weather-place").html(i+"<p>"+n+", "+o+"</p><p>"+e+"°"+t+"</p><p>"+a).fadeIn(400)}$(".celsius").on("click",function(){units="&units=metric",endUnit="C",$(this).css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),i()}),$(".farenheit").on("click",function(){units="&units=imperial",endUnit="F",$(this).css({color:"white"}),$(".celsius").css("color","rgba(72, 72, 72, 1.0)"),i()}),$(document).ready(function(){$(".celsius").css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),i()});var o=(new Date).getHours();7<=o&&o<20?document.body&&(document.body.background="images/day.jpg"):document.body&&(document.body.background="images/night.jpg")});