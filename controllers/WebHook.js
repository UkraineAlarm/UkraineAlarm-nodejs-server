'use strict';

var utils = require('../utils/writer.js');
var WebHook = require('../service/WebHookService');

module.exports.apiV3WebhookDELETE = function apiV3WebhookDELETE (req, res, next, body) {
  WebHook.apiV3WebhookDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3WebhookPATCH = function apiV3WebhookPATCH (req, res, next, body) {
  WebHook.apiV3WebhookPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3WebhookPOST = function apiV3WebhookPOST (req, res, next, body) {
  WebHook.apiV3WebhookPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
