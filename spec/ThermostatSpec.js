describe("Thermostat", function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('initial settings', function() {

        it('temperature set at 20 degrees', function() {
            expect(thermostat.temperature).toEqual(20);
        });

        it('\'power saving mode\' is on', function() {
            expect(thermostat.powerSavingMode).toBe(true);
        });
    });

    describe('maximum temperature', function() {

        it('is 25 degrees with \'power saving mode\' on', function() {
            expect(thermostat.maximumTemperature()).toEqual(25);
        });

        it('is 35 degrees with \'power saving mode\' off', function() {
            thermostat.powerSavingMode = false;
            expect(thermostat.maximumTemperature()).toEqual(35);
        });
    });

    describe('minimum temperature', function() {

        it('is 10 degrees', function() {
            expect(thermostat.minimumTemperature()).toEqual(10);
        });
    });

    describe('warmer', function() {

        describe('\'power saving mode\' on', function() {

            it('increases the temperature if it is < 25 degrees', function() {
                thermostat.warmer();
                expect(thermostat.temperature).toEqual(21);
            });

            it('does nothing if the temperature is >= 25 degrees', function() {
                thermostat.temperature = 25;
                thermostat.warmer();
                expect(thermostat.temperature).toEqual(25);
            });
        });

        describe('\'power saving mode\'  off', function() {

            it('increases the temperature if it is < 35 degrees', function() {
                thermostat.powerSavingMode = false;
                thermostat.warmer();
                expect(thermostat.temperature).toEqual(21);
            });

            it('does nothing if the temperature is >= 35 degrees', function() {
                thermostat.powerSavingMode = false;
                thermostat.temperature = 35;
                thermostat.warmer();
                expect(thermostat.temperature).toEqual(35);
            });
        });
    });

    describe('cooler', function() {

        it('decreases the temperature if is > 10 degrees', function() {
            thermostat.cooler();
            expect(thermostat.temperature).toEqual(19);
        });

        it('does nothing if the temperature is <= 10 degrees', function() {
            thermostat.temperature = 10;
            thermostat.cooler();
            expect(thermostat.temperature).toEqual(10);
        });
    });

    describe('reset', function() {

        it('sets the temperature to 20 degrees', function() {
            thermostat.temperature = 25;
            thermostat.reset();
            expect(thermostat.temperature).toEqual(20);
        });

        it('sets the \'power saving mode\' to on mode', function() {
            thermostat.powerSavingMode = false;
            thermostat.reset();
            expect(thermostat.powerSavingMode).toEqual(true);
        });
    });

    describe('energy usage', function() {

        it('is high if >= 25 degrees', function() {
            thermostat.temperature = 26;
            expect(thermostat.energyUsage()).toEqual('high');
        });

        it('is medium if >= 18 and < 25 degrees', function() {
            thermostat.temperature = 20;
            expect(thermostat.energyUsage()).toEqual('medium');
        });

        it('is low if < 18', function() {
            thermostat.temperature = 16;
            expect(thermostat.energyUsage()).toEqual('low');
        });
    });
});

