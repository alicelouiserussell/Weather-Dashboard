// openweathermap APIs 
    // current weather by location:
        // city, country
    // predicted weather by location:
        // city, country
        // limit count return to 5 days of results




var apiKey = "c3bb0467c5fe3c085d6f9dc0307b561b";


$(document).ready(function(){
  
$("#search-button").on("click", function(event){
    event.preventDefault();
    var cityInput = $("input").val();
    console.log(cityInput);

});

});

function currentWeather(){

};

function fiveDay(){

};

function searchHistory(){

};

function UvIndex (){

};

// $(".city-form").on("click", ".btn", function(event){
//     event.preventDefault();
//     alert("hello!");
//     var cityInput = $(this).attr("data-city");
//     console.log(cityInput);
//     var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},us&APPID=${apiKey}&units=imperial`;
//     console.log(cityInput);



//     $.ajax({
//         url: currentUrl,
//         method: "GET"
//     }).done(function(response){
//         console.log(response);


//     });
// });