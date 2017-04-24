/**
 * Starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

// Get the module "determinator" (using ./ to indicate it's located under the directory of this file).
var determinator = require('./src/determinator');

// Print the result to the terminal (console).

console.log(determinator.tellType('fatta relation mellan moduler och funktioner'));
console.log(determinator.tellType(true));
console.log(determinator.tellType(780));
console.log(determinator.tellType({}));
console.log(determinator.tellType([]));
console.log(determinator.tellType(null));
console.log(determinator.tellType(function() {}));
console.log(determinator.tellType());
}
//Jag förstår inte hur jag ska göra annars??? funkar ju inte..
