/**
 * Module for ScrapCar.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

// TODO: Write your code here!

function ScrapCar(petName = 'Skrotbilen') {

  this.petName = petName;
  this.speed = 0;
}

ScrapCar.prototype.accelerate = function(deltaSpeed) {

  if (typeof deltaSpeed !== 'number' || deltaSpeed === 0) {
    return this.petName + 's hastighet är oförändrad!';
  }

  const oldSpeed = this.speed;
  this.speed += deltaSpeed;

  return this.petName + 's hastighet ' +
    ((deltaSpeed < 0) ? 'minskar' : 'ökar') +
    ' från ' + oldSpeed + ' km/h till ' + this.speed + ' km/h.';
};


ScrapCar.prototype.turnLeft = function() {
  return this.petName + ' svänger vänster.'
}

ScrapCar.prototype.turnRight = function() {
  return this.petName + ' svänger höger.'
}

ScrapCar.prototype.start = function() {
    return this.petName + ' startar.';
  };


ScrapCar.prototype.stop = function() {
  this.speed = 0;
  return this.petName + ' stannar.'
  };



/**
 *  Exports.
 */
module.exports = ScrapCar;
