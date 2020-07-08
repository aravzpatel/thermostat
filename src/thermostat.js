class Thermostat{
  constructor(){
    this.temp = 20;
  }
  up(input){
    this.temp +=input;
  }
  down(input){
    this.temp -=input;
  }
};