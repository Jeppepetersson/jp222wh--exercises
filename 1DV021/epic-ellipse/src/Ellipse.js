/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

function Ellipse(a, b) {
  this.a = a;
  this.b = b;
}

Ellipse.prototype.area = function(){
  return Math.PI * this.a * this.b;
};

Ellipse.prototype.circumference = function() {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
};

Ellipse.prototype.toString = function(){
  return '{ a: ' + this.a +
  ', b: ' + this.b +
  ', area: ' + this.area().toFixed(1) +
  ', circumference: ' + this.circumference().toFixed(1) +
    ' }';
};
// TODO: Write your code here.

//calculate aria Math.PI * a * b.
//calculate circumference Math.PI * Math.sqrt(2 * a* a + 2 * b * b)

/**
 * Exports
 */
module.exports = Ellipse;

