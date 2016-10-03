/**
 * Module for lego part 3.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {Number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {Number} [y = 4] - The vertical number of knobs of the brick.
 * @param {String} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick(x = 2, y = 4, color = 'red') {

  this.x = x;
  this.y = y;
  this.color = color;

  LegoBrick.prototype.render = function() {
    console.log(this.toString());
  };

  LegoBrick.prototype.toString = function() {
    let str = '';

    for (let y = 0; y < this.y; y += 1) {
      for (let x = 0; x < this.x; x += 1) {
        str += '®';
        if (x < this.x - 1) {
          str += ' ';
        }
      }

      if (y < this.y - 1) {
        str += '\n';
      }
    }
    return str;
  };


  // TODO: Write your code here.
}



// TODO: Write your code here.

/**
 * Exports.
 *
 * @type {LegoBrick}
 */
exports.LegoBrick = LegoBrick;
