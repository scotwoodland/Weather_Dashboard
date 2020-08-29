// Variable names for the entire project 
var searchAnswer = "";
// $("#searchField") = searchAnswer;
var cityField = $("#cityName");
var tempField = $("#temp");
var humidField = $("#humidity");
var windField = $("#wind");
var uvField = $("#uvIndex");
var cityImage = $("#cityImage");
var weatherTitle = $("#weatherTitle");

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "denver" + "&appid=807d8a15787dc99f68e7ff8c4e102c45&units=imperial";
    
    // This is for the five day forecast!
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "denver" + "&appid=807d8a15787dc99f68e7ff8c4e102c45&units=imperial";
    let m = moment();
    let currentDate = m.toDate();
    let currentTime = moment();
    console.log(currentDate);
    console.log(currentTime);
    
    function getcurrentTime() {
      $("#currentDay").append("Current Date/Time: " + currentDate);
    };
    getcurrentTime();

    

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      cityField.append($("<span>" + ": " + response.name + "</span>"));
      tempField.append($("<span>" + ": " + response.main.temp + "F" + "</span>"));
      humidField.append($("<span>" + ": " + response.main.humidity + "</span>"));
      windField.append($("<span>" + ": " + response.wind.speed + "</span>"));
      weatherTitle.append($("<span>" + ": " + response.weather[0].description + "</span>"));
      
      weatherTitle.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"));
      // console.log(response.weather[0].description);
      
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      
      console.log(response);
      console.log("lat: " + lat);
      console.log("lon: " + lon);
    });
    
    var card1 = $("#card1");
    var card2 = $("#card2");
    var card3 = $("#card3");
    var card4 = $("#card4");
    var card5 = $("#card5");
    
    
    $.ajax({
      // url: "https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-104&appid=807d8a15787dc99f68e7ff8c4e102c45",
      url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + "39.74" + "39&lon=" + "-104.98" + "&appid=807d8a15787dc99f68e7ff8c4e102c45",
      method: "GET"
    }).then(function(response) {
      var kelvin = Math.round((((response.daily[0].temp.max)-273.15)*1.8)+32);
      var kelvin2 = Math.round((((response.daily[1].temp.max)-273.15)*1.8)+32);
      var kelvin3 = Math.round((((response.daily[2].temp.max)-273.15)*1.8)+32);
      var kelvin4 = Math.round((((response.daily[3].temp.max)-273.15)*1.8)+32);
      var kelvin5 = Math.round((((response.daily[4].temp.max)-273.15)*1.8)+32);
      
      uvField.append($("<span>" + ": " + response.current.uvi + "</span>"));

      var uvResponse = response.current.uvi;
      // var uvIndex = $("<p>").addClass("card-text").text("UV Index: ");
      // var uvBtn = $("#uvBtn").addClass("btn btn-sm").text(uvResponse);
      var uvBtn = $("#uvBtn");

      if (uvResponse < 3) {
       uvBtn.addClass("btn-success").text("Favorable");
      } else if (uvResponse < 7) {
        uvBtn.addClass("btn-warning").text("Moderate");
      } else {
        uvBtn.addClass("btn-danger").text("Severe");
      }

      card1.append($("<h5>" + "Weather: " + response.daily[0].weather[0].description + "</h5>"));
      card1.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.daily[0].weather[0].icon + ".png"));
      card1.append($("<h5>" + "Temp: " + kelvin + "</h5>"));
      card1.append($("<h5>" + "Humidity: " + response.daily[0].humidity + "</h5>"));

      card2.append($("<h5>" + "Weather: " + response.daily[1].weather[0].description + "</h5>"));
      card2.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.daily[1].weather[0].icon + ".png"));
      card2.append($("<h5>" + "Temp: " + kelvin2 + "</h5>"));
      card2.append($("<h5>" + "Humidity: " + response.daily[1].humidity + "</h5>"));

      card3.append($("<h5>" + "Weather: " + response.daily[2].weather[0].description + "</h5>"));
      card3.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.daily[2].weather[0].icon + ".png"));
      card3.append($("<h5>" + "Temp: " + kelvin3 + "</h5>"));
      card3.append($("<h5>" + "Humidity: " + response.daily[2].humidity + "</h5>"));

      card4.append($("<h5>" + "Weather: " + response.daily[3].weather[0].description + "</h5>"));
      card4.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.daily[3].weather[0].icon + ".png"));
      card4.append($("<h5>" + "Temp: " + kelvin4 + "</h5>"));
      card4.append($("<h5>" + "Humidity: " + response.daily[3].humidity + "</h5>"));

      card5.append($("<h5>" + "Weather: " + response.daily[4].weather[0].description + "</h5>"));
      card5.append($("<img>").attr("src", "https://openweathermap.org/img/w/" + response.daily[4].weather[0].icon + ".png"));
      card5.append($("<h5>" + "Temp: " + kelvin5 + "</h5>"));
      card5.append($("<h5>" + "Humidity: " + response.daily[4].humidity + "</h5>"));




      console.log(response);
      console.log("UV: " + response.current.uvi);
      console.log("Tomorrow: " + response.daily[0].weather[0].description);
      console.log("2days: " + response.daily[1].weather[0].description);
      console.log("3days: " + response.daily[2].weather[0].description);
      console.log("4days: " + response.daily[3].weather[0].description);
      console.log("5days: " + response.daily[4].weather[0].description);
    });
