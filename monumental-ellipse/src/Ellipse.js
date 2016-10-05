/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

function Ellipse(a, b) {
  let _a;
  let _b;

  Object.defineProperty(this, 'a', {
    get: function() {
      return _a;
    },

    set: function(value) {
      const newValue = Number(value);
      if (isNaN(newValue) || newValue < 0) {
        throw new Error('a must be an integer greater than 0.');
      }

      _a = newValue;
    }
  });

  Object.defineProperty(this, 'b', {
    get: function() {
      return _b;
    },

    set: function(value) {
      const newValue = Number(value);
      if (isNaN(newValue) || newValue < 0) {
        throw new Error('b must be an integer greater than 0.');
      }

      _b = newValue;
    }
  });
  this.a = a;
  this.b = b;
}

Ellipse.prototype.area = function() {
  return Math.PI * this.a * this.b;
}

Ellipse.prototype.circumference = function() {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b);
}

Ellipse.prototype.toString = function(){
  return '{ a: ' + this.a +
      ', b: ' + this.b +
      ', area: ' + this.area().toFixed(1) +
      ', circumference: ' + this.circumference().toFixed(1) +
      ' }';
};
// TODO: Write your code here!

/**
 *  Exports.
 */
module.exports = Ellipse;
