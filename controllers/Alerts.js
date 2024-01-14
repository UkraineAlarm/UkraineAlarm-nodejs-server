'use strict';

var utils = require('../utils/writer.js');
var Alerts = require('../service/AlertsService');

module.exports.apiV3AlertsGET = function apiV3AlertsGET (req, res, next) {
  Alerts.apiV3AlertsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AlertsRegionHistoryGET = function apiV3AlertsRegionHistoryGET (req, res, next, regionId) {
  Alerts.apiV3AlertsRegionHistoryGET(regionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AlertsRegionIdGET = function apiV3AlertsRegionIdGET (req, res, next, regionId) {
  Alerts.apiV3AlertsRegionIdGET(regionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AlertsStatusGET = function apiV3AlertsStatusGET (req, res, next) {
  Alerts.apiV3AlertsStatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
