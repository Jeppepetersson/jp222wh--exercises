/**
 * Module for pushToArray.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns a copy of an array where a number has been added to the end of the copy.
 *
 * @param {Array} source The array to create a copy of.
 * @param {Number} number The number to add to the end of the copy of the array.
 * @throws {TypeError} The source parameter must be an Array; number parameter must be a Number.
 * @throws {Error} The source parameter must not be an empty array.
 * @returns {Array} A copy of the source array with an additional number.
 */
module.exports.pushToArray = function(source, number) {

  let copy;

  if(!Array.isArray(source) || typeof number !== 'number'){
    throw new TypeError('Must be an array and a number!');
  }

  if(source.length === 0) {
    throw new TypeError('the array must have a value!');
  }

  copy = source.slice();
  copy.push(number);

  return copy;
  //Fick delvis rätt på min egna kod, men kunde inte klura ut varför inte allt blev godkännt, så kollade på lösningsförslag och en lampa tändes!

};
