/**
 * MyArray namespace.
 *
 * @namespace MyArray
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MyArray = (function() {

  return {
    /**
     * Returns a numrically sorted copy of an array.
     *
     * @param {Array} source The array to create a sorted copy of.
     * @throws {TypeError} The source parameter must be an Array.
     * @returns {Array} A sorted copy of the source array.
     */
    sort: function(source) {

      if (!Array.isArray(source)){
        throw new TypeError('source doesn\'t refer ta an array');
      }

      if (source.length === 0) {
        throw new error('The array is empty!');
      }

      let copy;

      copy = Array.slice(source);

      copy.sort((a, b) => a - b);{
        return copy;

      }
      }

    };

    /**
     * Returns a numerically sorted copy (descending order) of an array.
     *
     * @param {Array} source The array to create a sorted copy of.
     * @throws {TypeError} The source parameter must be an Array.
     * @returns {Array} A sorted copy (descending order) of the source array.
     */
    sortDescending: function(source) {

    if (!Array.isArray(source)){
      throw new TypeError('source doesn\'t refer ta an array');
    }

    if (source.length === 0) {
      throw new error('The array is empty!');
    }

    let copy;

    copy = Array.slice(source);

    copy.sort((a, b) <= b - a);{
      return copy;
    }

  }
})();

module.exports = MyArray;
