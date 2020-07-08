class Thermostat{
  constructor(){
    this.temp = 20;
    this.min = 10;
    this.max = 32;
    this.powerSaving = false
  };

  tempLimit(temp, min, max){ 
    // console.log(temp < min ? min : (temp > max ? max : temp))
    this.temp = temp < min ? min : (temp > max ? max : temp);
  };

  up(input){
    (this.powerSaving === true) ? this.tempLimit(this.temp +=input,10,25) : this.tempLimit(this.temp +=input,10,32);
    // if (this.powerSaving == true) {
    //   this.temp = this.tempLimit(this.temp +=input,10,25)
    // } else {
    //   this.temp = this.tempLimit(this.temp +=input,10,32)
    }
  
  down(input){
    this.tempLimit(this.temp -=input,10,32)
  };
};