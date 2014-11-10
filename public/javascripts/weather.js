
$.ajaxSetup( { 'async': false } );

function Weather() {
    this.temperature = getWeatherTemperature();
}

function getWeatherTemperature() {
    var currentTemperature;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", function(data) {
        currentTemperature = data.main.temp.toFixed();
    });
    return currentTemperature;
}

Weather.prototype.getBackgroundColor = function(temp) {
    if(this.temperature >= 25) return 'rgb(200, 45, 45)';
    if(this.temperature >= 18) return 'orange';
    return 'green';
};

