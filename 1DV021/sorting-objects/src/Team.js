/**
 * Team namespace.
 *
 * @namespace Team
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

let Team = (function() {

  /**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
  let sortByPoints = function(teams) {

    if(!Array.isArray(teams)){
      throw new TypeError('does not refer to an array!');
    }

    return teams.sort(function(a, b){
      return b.points > a.points;
    });

    console.log(point);

  };

  return {
    sortByPoints
  };
})();

module.exports = Team;
