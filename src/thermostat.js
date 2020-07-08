class Thermostat{
  constructor(){
    this.temp = 20;
    this.min = 10;
    this.maxPowerSave = 25;
    this.max = 32;
    this.powerSaving = true
  };

  tempLimit(temp, min, max){ 
    this.temp = temp < min ? min : (temp > max ? max : temp);
  };

  up(input){
    (this.powerSaving === true) ? this.tempLimit(this.temp +=input, this.min, this.maxPowerSave) : this.tempLimit(this.temp +=input, this.min, this.max);
  };
  
  down(input){
    this.tempLimit(this.temp -=input,this.min, this.maxPowerSave)
  };

  changeMode(){
    this.powerSaving = !this.powerSaving;
  };

  reset(){
    this.temp = 20;
  };

  usage(){
    if (this._isLowUsage()){
      return 'low-usage';
    }else if(this._isMediumUsage()){
      return 'medium-usage';
    }else {
      return 'high-usage';
    };
  }

  _isLowUsage(){
    return this.temp < 18;
  };

  _isMediumUsage(){
    return this.temp <= 25;
  };
};