(function() {

    var thermostat = new Thermostat();
    var weather = new Weather();

    function updateTempDisplay() {
        $('.temp').text(thermostat.temperature);
        $('#thermostat-temp').removeClass('low medium high').addClass(thermostat.energyUsage());
    }

    function updateWeatherDisplay() {
        $('#current-weather').text(weather.temperature + "\°");
        $('#weather-container').css('background-color', weather.getBackgroundColor());
    }

    $(document).ready(function() {

        updateTempDisplay();
        updateWeatherDisplay();

        $('.warmer').on('click', function() {
            thermostat.warmer();
        });

        $('.cooler').on('click', function() {
            thermostat.cooler();
        });

        $('.reset').on('click', function() {
            thermostat.reset();
            $('.psm').prop('checked', true);
        });

        $('button').on('click', function() {
            updateTempDisplay();
        });

        $('.psm').on('change', function() {
            if ((thermostat.powerSavingMode === false) && (thermostat.temperature > 25)) {
                thermostat.temperature = 25;
                updateTempDisplay();
            }
            thermostat.powerSavingMode = $(this).prop('checked');
        });

        $('.open-button').on('click', function() {
            $('#weather-container').fadeToggle(200);
            $('.open-button').toggleClass('rotate-button');
        });
    });

})();
