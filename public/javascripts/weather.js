
$.ajaxSetup( { 'async': false } );

function Weather() {
    this.temperature = getWeatherTemperature();
}

function getWeatherTemperature() {
    var currentTemperature;
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric',
        async: false,  
        success: function(data) {
            currentTemperature = data.main.temp.toFixed();
        },
        error: function() { 
            currentTemperature = '-';
        } 
    });
    return currentTemperature;
}

Weather.prototype.getBackgroundColor = function(temp) {
    if(this.temperature === '-') return 'rgb(220, 220, 220)';
    if(this.temperature >= 25) return 'rgb(200, 45, 45)';
    if(this.temperature >= 18) return 'orange';
    return 'green';
};

