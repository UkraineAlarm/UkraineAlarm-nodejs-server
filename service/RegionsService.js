'use strict';


/**
 * Повертає список усіх областей, регіонів та міст
 *
 * returns RegionsViewModel
 **/
exports.apiV3RegionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "states" : [ {
    "regionChildIds" : [ null, null ],
    "regionId" : "regionId",
    "regionType" : "State",
    "regionName" : "regionName"
  }, {
    "regionChildIds" : [ null, null ],
    "regionId" : "regionId",
    "regionType" : "State",
    "regionName" : "regionName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

