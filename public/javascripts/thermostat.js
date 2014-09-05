
var thermostat = new Thermostat();

function Thermostat() {
    this.temperature = 20;
    this.powerSavingMode = true;
};

function updateWeather() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", function(data) {
        $('#current-weather').text(data.main.temp.toFixed()+"°");
        document.getElementById('weather-container').style.backgroundColor = getBackgroundColor(data.main.temp.toFixed());
    });
};

function getBackgroundColor(temp) {
            var old_value = temp
            var old_min = 0
            var old_max = 30
            var new_min = 0
            var new_max = 100
            var new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min;
            b = new_value<50 ? 255 : Math.floor(255-(new_value*2-100)*255/100);
            r = new_value>50 ? 255 : Math.floor((new_value*2)*255/100);
            return 'rgba('+r+',100 , '+b+', 0.5)';
};

function updateTemperature() {
    $('.temp').text(thermostat.temperature);
    // $.post('http://localhost:9393/temperature_change', { newTemperature: thermostat.temperature });
    $('#thermostat-temp').removeClass('low medium high').addClass(thermostat.energyUsage());
};


Thermostat.prototype.maximumTemperature = function() {
    if(this.powerSavingMode) {
        return 25;
    };
    return 35;
};

Thermostat.prototype.minimumTemperature = function() {
    return 10;
};

Thermostat.prototype.warmer = function() {
    if(this.temperature < this.maximumTemperature()) {
        this.temperature += 1;
    };
};

Thermostat.prototype.cooler = function() {
    if(this.temperature > this.minimumTemperature()) {
        this.temperature -= 1;
    };
};

Thermostat.prototype.reset = function() {
    this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
    if(this.temperature >= 25) return 'high';
    if(this.temperature >= 18) return 'medium';
    return 'low';
};


$(document).ready(function() {

    updateTemperature();

    updateWeather();

    $('.warmer').on('click', function() {
        thermostat.warmer();
    });

    $('.cooler').on('click', function() {
        thermostat.cooler();
    });

    $('.reset').on('click', function() {
        thermostat.reset();
    });

    $('button').on('click', function() {
        updateTemperature();
    });

    $('.psm').on('change', function() {
        if ((thermostat.powerSavingMode == false) && (thermostat.temperature > 25)) {
            thermostat.temperature = 25;
            updateTemperature();
        };
        thermostat.powerSavingMode = $(this).prop('checked');
    });
});



