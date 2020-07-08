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
});