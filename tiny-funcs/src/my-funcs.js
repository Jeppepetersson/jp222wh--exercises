/**
 * Module for some tiny functions.
 *
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.0.1
 */

/**
 * Returns the sum of two local variables.
 *
 * @returns {Number}
 */

'use strict';

exports.add = function() {
  let a = 12;
  let b = '12';

  b = Number.parseInt(b);

  return a + b;
};

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {String} The string 'I'm going to learn how to program in 9 weeks.'.
 */
exports.concat = function() {
  let message = 'I\'m going to learn how to program in';
  let time = 9;
  let weeks = 'weeks.';

  return message + ' ' + time + ' ' + weeks;
//gjorde först message + time + weeks; var ej medveten om att man kunde gör 'mellanslag' (' ')
};

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {Number} The sum of two variables rounded to the nearest integer.
 */
exports.round = function() {
  let firstNumber = 12.24;
  let secondNumber = 12.27;

  return Math.round(firstNumber + secondNumber);
};

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {Number} max An integer greater than zero.
 * @returns {String} A string with comma separated odd values.
 */
exports.getOddNumbers = function(max) {


//Fattar inte. för svårt??

};

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {String} A greeting according to the time of day.
 */
exports.greetings = function() {
  let hour = new Date().getHours();

  let message = 'Good ';

  if (hour >= 8 && hour < 12) {
    message += 'morning!';
  } else if (hour >= 12 && hour < 18) {
    message += 'afternoon!';
  } else if (hour >= 18 && hour < 24) {
      message += 'evening!';
  } else {
      message += 'night!';
  }
 return message;
};

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
exports.replaceHyphensFor = function(str) {

  // TODO: Write your code here.
};

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
exports.replaceHyphensWhile = function(str) {

  // TODO: Write your code here.
};

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} - A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
exports.getNumberSequence = function() {

  // TODO: Write your code here.
};
