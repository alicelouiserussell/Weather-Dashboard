var apiKey = "c3bb0467c5fe3c085d6f9dc0307b561b";

$(document).ready(function(){
  
$("#search-button").on("click", function(event){
    event.preventDefault();
    var cityInput = $("input").val();
    var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},us&APPID=${apiKey}&units=imperial`
    console.log(cityInput);
    console.log(currentUrl);

    $.ajax({
        url: currentUrl,
        method: "GET"
    }).done(function(response){
        console.log(response.name);
        console.log(response);
        console.log(response.main.temp);
        console.log(response.main.humidity);
        console.log(response.wind.speed);
        console.log(response.coord.lat);
        console.log(response.coord.lon);

        var currentCity = response.name;
        var currentTemp = response.main.temp;
        var currentHumidity = response.main.humidity;
        var currentWind = response.wind.speed;
        var currentLat = response.coord.lat;
        var currentLon = response.coord.lon;

        var currentUvUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${currentLat}&lon=${currentLon}&APPID=${apiKey}`;

        $("#current-city").append(currentCity);
        $("#current-temp").append(currentTemp + " °F");
        $("#current-humidity").append(currentHumidity + " %");
        $("#current-wind").append(currentWind + " MPH");

        $.ajax({
            url: currentUvUrl,
            method: "GET"
        }).done(function(response){
            console.log(response);
            console.log(response.value);
            var currentUv = response.value;
            $("#uv-index").append(currentUv);
        });

        var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity},us&APPID=${apiKey}&units=imperial`;

        $.ajax({
            url: fiveDayUrl,
            method: "GET"
        }).done(function(response){
            console.log(response);
            console.log(response.list[0].main.temp);
            
            $("#temp1").append(response.list[0].main.temp + " °F");
            $("#temp2").append(response.list[1].main.temp + " °F");
            $("#temp3").append(response.list[2].main.temp + " °F");
            $("#temp4").append(response.list[3].main.temp + " °F");
            $("#temp5").append(response.list[4].main.temp + " °F");
            
            $("#humid1").append(response.list[0].main.humidity + " %");
            $("#humid2").append(response.list[1].main.humidity + " %");
            $("#humid3").append(response.list[2].main.humidity + " %");
            $("#humid4").append(response.list[3].main.humidity + " %");
            $("#humid5").append(response.list[4].main.humidity + " %");
        });
            
    });   

    
});

});

function currentWeather(){

};

function fiveDay(){

};

function searchHistory(){

};

function uvIndex (){

};

