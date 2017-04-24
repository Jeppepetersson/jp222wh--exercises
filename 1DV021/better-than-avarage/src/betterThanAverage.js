/**
 * Module for betterThanAverage.
 *
 * @namespace bta
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {Array<object>} students
 * @returns {Array<string>} *
 */
let betterThanAverage = function(students) {

  if (!Array.isArray(students)) {
    throw new TypeError('students does not refer to an array');
  }

  if (students.length === 0) {
    throw new Error('The Array can\'t be empty');
  }
  let average = students.reduce(function(current, next) {
      return current + next.points;
    }, 0) / students.length;

  return students.filter(function(current) {
    return current.points >= average;
  }).map(function(current) {
    return current.name;
  });
};

module.exports = betterThanAverage;
