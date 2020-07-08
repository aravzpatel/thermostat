describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with temperature of 20", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("can increase temp by 1 when up funtion called with input 1", function() {
    thermostat.up(1);
    expect(thermostat.temp).toEqual(21);
  })

  it("can decrease temp by 1 when down funtion called with input 1", function() {
    thermostat.down(1);
    expect(thermostat.temp).toEqual(19);
  })

  it("can't decrease less than 10", function() {
    thermostat.down(11);
    expect(thermostat.temp).toEqual(10);
  });

  describe("If power saving is off", function(){
    it("will allow the temp to go to 32", function(){
      thermostat.powerSaving = false
      thermostat.up(13);
      expect(thermostat.temp).toEqual(32);
    });
  });

  describe("If power saving is on", function(){
    it("will allow the temp to only go to 25", function(){
      thermostat.powerSaving = true
      thermostat.up(13);
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('power saving mode can be turned off', function(){
    it('turns from true to false', function(){
      thermostat.changeMode()
      expect(thermostat.powerSaving).toEqual(false)
    });
  })

  describe('#reset function', function(){
    it('resets the thermostat to 20', function(){
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#usage function', function(){
    it('the temperature is 15 and it returns low-usage', function(){
      thermostat.down(5);
      expect(thermostat.usage()).toEqual('low-usage');
    });
    
    it('the temperature is 23 and it returns medium-usage', function(){
      thermostat.up(3);
      expect(thermostat.usage()).toEqual('medium-usage');
    });

    it('the temperature is 26 and it returns high-usage', function(){
      thermostat.changeMode();
      thermostat.up(6);
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });

});