'use strict';


/**
 * Відписка на WebHook про нові сирени та їх відбій
 *
 * body WebHookModel  (optional)
 * no response value expected for this operation
 **/
exports.apiV3WebhookDELETE = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Оновлення WebHook посилання про нові сирени та їх відбій
 *
 * body WebHookModel  (optional)
 * no response value expected for this operation
 **/
exports.apiV3WebhookPATCH = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Підписка на WebHook про нові сирени та їх відбій. У вебхукі відпрявляється подія тривоги/відбою (приклад в відповіді \"200\")
 *
 * body WebHookModel  (optional)
 * returns AlertRegionModel
 **/
exports.apiV3WebhookPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "regionId" : "regionId",
  "regionType" : "State",
  "regionEngName" : "regionEngName",
  "regionName" : "regionName",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "activeAlerts" : [ {
    "regionId" : "regionId",
    "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
    "type" : "UNKNOWN"
  }, {
    "regionId" : "regionId",
    "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
    "type" : "UNKNOWN"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

