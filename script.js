// Variable names for the entire project 
// var city = "Salt Lake City";
// $("#searchField") = searchAnswer;
var cityField = $("#cityName");
var tempField = $("#temp");
var humidField = $("#humidity");
var windField = $("#wind");
var uvField = $("#uvIndex");
var cityImage = $("#cityImage");
var weatherTitle = $("#weatherTitle");

//  Input the Current Date and Time 
let m = moment();
let currentDate = m.toDate();
let currentTime = moment();
console.log(currentDate);
console.log(currentTime);

function getcurrentTime() {
  $("#currentDay").html("Current Date/Time: " + currentDate);
};
getcurrentTime();

// ------------------------------

$("#add-city").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var city = $("#city-input").val().trim();
  console.log(city);
  
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=807d8a15787dc99f68e7ff8c4e102c45&units=imperial";
  
  // ------------------------------
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    cityField.html($("<span>" + "City Name: " + response.name + "</span>"));
    tempField.html($("<span>" + "Temperature: " + response.main.temp + "F" + "</span>"));
    humidField.html($("<span>" + "Humidity: " + response.main.humidity + "</span>"));
    windField.html($("<span>" + "Wind Speed: " + response.wind.speed + "</span>"));
    weatherTitle.html($("<span>" + "Today's Weather is: " + response.weather[0].description + "</span>"));
    
    weatherTitle.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"));
    // console.log(response.weather[0].description);
    
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    
    console.log(response);
    console.log("lat: " + lat);
    console.log("lon: " + lon);
          
    
    var card1 = $("#card1");
    var card2 = $("#card2");
    var card3 = $("#card3");
    var card4 = $("#card4");
    var card5 = $("#card5");
    
    
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "39&lon=" + lon + "&appid=807d8a15787dc99f68e7ff8c4e102c45",
      method: "GET"
    }).then(function(response) {
      var kelvin = Math.round((((response.daily[0].temp.max)-273.15)*1.8)+32);
      var kelvin2 = Math.round((((response.daily[1].temp.max)-273.15)*1.8)+32);
      var kelvin3 = Math.round((((response.daily[2].temp.max)-273.15)*1.8)+32);
      var kelvin4 = Math.round((((response.daily[3].temp.max)-273.15)*1.8)+32);
      var kelvin5 = Math.round((((response.daily[4].temp.max)-273.15)*1.8)+32);
      
      uvField.html($("<span>" + "Uv Index: " + response.current.uvi + "</span>"));
      
      var uvBtn = $("#uvBtn");
      
      if (response.current.uvi < 3) {
        uvBtn.addClass("btn-success").text("Favorable");
      } else if (response.current.uvi < 7) {
        uvBtn.addClass("btn-warning").text("Moderate");
      } else {
        uvBtn.addClass("btn-danger").text("Severe");
      }
      
      $("#one").text("Weather: " + response.daily[0].weather[0].description);
      $("#two").attr("src", "https://openweathermap.org/img/w/" + response.daily[0].weather[0].icon + ".png");
      $("#three").text("High: " + kelvin);
      $("#four").text("Humidity: " + response.daily[0].humidity);
      
      $("#five").text("Weather: " + response.daily[1].weather[0].description);
      $("#six").attr("src", "https://openweathermap.org/img/w/" + response.daily[1].weather[0].icon + ".png");
      $("#seven").text("High: " + kelvin);
      $("#eight").text("Humidity: " + response.daily[1].humidity);
      
      $("#nine").text("Weather: " + response.daily[2].weather[0].description);
      $("#ten").attr("src", "https://openweathermap.org/img/w/" + response.daily[2].weather[0].icon + ".png");
      $("#eleven").text("High: " + kelvin);
      $("#twelve").text("Humidity: " + response.daily[2].humidity);
      
      $("#thirteen").text("Weather: " + response.daily[3].weather[0].description);
      $("#fourteen").attr("src", "https://openweathermap.org/img/w/" + response.daily[3].weather[0].icon + ".png");
      $("#fifteen").text("High: " + kelvin);
      $("#sixteen").text("Humidity: " + response.daily[3].humidity);
      
      $("#seventeen").text("Weather: " + response.daily[4].weather[0].description);
      $("#eighteen").attr("src", "https://openweathermap.org/img/w/" + response.daily[4].weather[0].icon + ".png");
      $("#nineteen").text("High: " + kelvin);
      $("#twenty").text("Humidity: " + response.daily[4].humidity);
           
      console.log(response);
      console.log("UV: " + response.current.uvi);
      console.log("Tomorrow: " + response.daily[0].weather[0].description);
      console.log("2days: " + response.daily[1].weather[0].description);
      console.log("3days: " + response.daily[2].weather[0].description);
      console.log("4days: " + response.daily[3].weather[0].description);
      console.log("5days: " + response.daily[4].weather[0].description);
    });
   });
  });
  