

$.ajaxSetup({'async': false});

function Weather() {
    getWeatherTemperature;
    this.temperature = getWeatherTemperature();
}

function getWeatherTemperature() {
    var currentTemperature;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", function(data) {
        currentTemperature = data.main.temp.toFixed();
    });
    return currentTemperature;
};

Weather.prototype.updateBackground = function(temp) {
    var old_value = temp, 
        old_min = 0, 
        old_max = 30,
        new_min = 0,
        new_max = 100,
        new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min;
    blue = new_value < 50 ? 255 : Math.floor(255-(new_value*2-100)*255/100);
    red = new_value > 50 ? 255 : Math.floor((new_value*2)*255/100);
    return 'linear-gradient(rgb(' + (red+10) + ', 140, ' + (blue-20) + '), rgb(' + (red+90) + ', 110, ' + (blue-40) + '))'
}
