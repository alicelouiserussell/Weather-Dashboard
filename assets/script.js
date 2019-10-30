// openweathermap APIs 
    // current weather by location:
        // city, country
    // predicted weather by location:
        // city, country
        // limit count return to 5 days of results




var apiKey = "c3bb0467c5fe3c085d6f9dc0307b561b";
var city; 

var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=${apiKey}&units=imperial`;

var dailyUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&APPI=${apiKey}&cnt=5`

