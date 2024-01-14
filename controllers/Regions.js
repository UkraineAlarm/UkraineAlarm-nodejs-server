'use strict';

var utils = require('../utils/writer.js');
var Regions = require('../service/RegionsService');

module.exports.apiV3RegionsGET = function apiV3RegionsGET (req, res, next) {
  Regions.apiV3RegionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
