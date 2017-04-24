/**
 * Module for lego part 1.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns an object representing a lego brick.
 *
 * @param {Number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {Number} [y = 4] - The vertical number of knobs of the brick.
 * @param {String} [color = 'red'] - Color of the brick ('blue', 'red', 'green', etc.)
 * @returns {Object} obj - Object representing a brick.
 * @returns {Number} obj.x - Horizontal number of horizontal nobs of the brick.
 * @returns {Number} obj.y - Vertical number of vertical nobs of the brick.
 * @returns {String} obj.color - Color of the brick
 * @returns {Function} obj.toString - A function returning a string representing the object.
 * @returns {Function} obj.render - A function rendering the object.
 */
let createLegoBrick = function(x = 2, y = 4, color = 'red') {

  let render = function () {
    console.log(this.toString());
  };

  let toString = function () {
    let str = '';

    for (let y = 0; y < this.y; y++) {
      for (let x = 0; x < this.x; x++) {
        str += '®';
        if (x < this.x -1) {
          str += ' ';
        }
      }
      if (y < this.y -1) {
        str += '\n';
      }
    }
    return str;
  };

  return {
    x: x,
    y: y,
    color: color,
    toString,
    render
  };
};
  // TODO: Write your code here.


/**
 *  Exports.
 *
 * @type {createLegoBrick}
 */
exports.createLegoBrick = createLegoBrick;
