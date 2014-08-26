
var thermostat = new Thermostat();

function Thermostat() {
    this.temperature = 20;
    this.powerSavingMode = true;
};

function updateWeather() {
    var myobject = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", function(data) {
        $('#current-weather').text(data.main.temp.toFixed()+"°");
    });
    // $('#current-weather').text(25+"°");
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



