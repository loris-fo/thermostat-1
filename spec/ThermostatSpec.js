describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("is intially at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  })

  it("has PSM on by default", function(){
    expect(thermostat.powerSavingMode).toBe(true);
  })

  describe('maximum temperature', function(){
    it('is 25 degrees with PSM on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 35 degrees with PSM off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(35);
    })
  })

  describe('minimum temperature', function(){
    it('is 10 degrees', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    })
  });

  describe('warmer', function(){
    describe('PSM on', function(){
      it('increases the temperature if < 25', function(){
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(21)
      })

      it('does nothing the temperature if >= 25', function(){
        thermostat.temperature = 25
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(25)
      })
    })

    describe('PSM off', function(){
      it('increases the temperature if < 35', function(){
        thermostat.powerSavingMode = false;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(21)
      })

      it('does nothing the temperature if >= 35', function(){
        thermostat.powerSavingMode = false;
        thermostat.temperature = 35
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(35)
      })
    })
  })

  describe('cooler', function(){
    it('decreases the temperature if > 10', function(){
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(19)
    })

    it('does nothing the temperature if <= 10', function(){
      thermostat.temperature = 10
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(10)
    })
  })

  describe('reset', function(){
    it('resets the temperature to 20', function(){
      thermostat.temperature = 25
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
  })

  describe('energy usage', function(){
    it('is high if >= 25', function(){
      thermostat.temperature = 26
      expect(thermostat.energyUsage()).toEqual('high')
    });

    it('is medium if >= 18 and < 25', function(){
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('medium')
    });

    it('is low if < 18', function(){
      thermostat.temperature = 16
      expect(thermostat.energyUsage()).toEqual('low')
    });
  })
});
