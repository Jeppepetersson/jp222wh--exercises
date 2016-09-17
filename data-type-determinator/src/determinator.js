/**
 * Module for determinator.
 *
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {String} The data type of the parameter.
 */
exports.tellType = function(data) {

  var result = 'You sent me a';
  var type = typeof data;

  if (type === 'undefined'); {
    result += 'n undefined value';
  } else if (type === ' string.' ||
             type === ' boolean.' ||
             type === ' number.' ||
             type === ' function.'); {
    result += type;
  } else if (type === 'n object.' ||
             type === 'n array.'); {
    result += type;
  }

  return result;
};
