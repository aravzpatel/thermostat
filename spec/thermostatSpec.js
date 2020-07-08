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
});