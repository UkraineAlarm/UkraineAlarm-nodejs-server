'use strict';


/**
 * Області, регіони та громади з тривогами
 *
 * returns List
 **/
exports.apiV3AlertsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Отримати останніх 25 тривог регіону
 *
 * regionId String  (optional)
 * returns List
 **/
exports.apiV3AlertsRegionHistoryGET = function(regionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "regionId" : "regionId",
  "regionName" : "regionName",
  "alarms" : [ {
    "duration" : {
      "milliseconds" : 5,
      "hours" : 1,
      "seconds" : 2,
      "totalDays" : 7.061401241503109,
      "ticks" : 0,
      "totalHours" : 9.301444243932576,
      "totalMilliseconds" : 3.616076749251911,
      "totalMinutes" : 2.027123023002322,
      "minutes" : 5,
      "days" : 6,
      "totalSeconds" : 4.145608029883936
    },
    "alertType" : "UNKNOWN",
    "regionId" : "regionId",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "regionName" : "regionName",
    "isContinue" : true,
    "startDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "duration" : {
      "milliseconds" : 5,
      "hours" : 1,
      "seconds" : 2,
      "totalDays" : 7.061401241503109,
      "ticks" : 0,
      "totalHours" : 9.301444243932576,
      "totalMilliseconds" : 3.616076749251911,
      "totalMinutes" : 2.027123023002322,
      "minutes" : 5,
      "days" : 6,
      "totalSeconds" : 4.145608029883936
    },
    "alertType" : "UNKNOWN",
    "regionId" : "regionId",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "regionName" : "regionName",
    "isContinue" : true,
    "startDate" : "2000-01-23T04:56:07.000+00:00"
  } ]
}, {
  "regionId" : "regionId",
  "regionName" : "regionName",
  "alarms" : [ {
    "duration" : {
      "milliseconds" : 5,
      "hours" : 1,
      "seconds" : 2,
      "totalDays" : 7.061401241503109,
      "ticks" : 0,
      "totalHours" : 9.301444243932576,
      "totalMilliseconds" : 3.616076749251911,
      "totalMinutes" : 2.027123023002322,
      "minutes" : 5,
      "days" : 6,
      "totalSeconds" : 4.145608029883936
    },
    "alertType" : "UNKNOWN",
    "regionId" : "regionId",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "regionName" : "regionName",
    "isContinue" : true,
    "startDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "duration" : {
      "milliseconds" : 5,
      "hours" : 1,
      "seconds" : 2,
      "totalDays" : 7.061401241503109,
      "ticks" : 0,
      "totalHours" : 9.301444243932576,
      "totalMilliseconds" : 3.616076749251911,
      "totalMinutes" : 2.027123023002322,
      "minutes" : 5,
      "days" : 6,
      "totalSeconds" : 4.145608029883936
    },
    "alertType" : "UNKNOWN",
    "regionId" : "regionId",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "regionName" : "regionName",
    "isContinue" : true,
    "startDate" : "2000-01-23T04:56:07.000+00:00"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Статус області/регіону/громади
 *
 * regionId String ID області/регіону/громади
 * returns List
 **/
exports.apiV3AlertsRegionIdGET = function(regionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Перевірка номеру останньої дії. Використовувати для перевірки необхідності оновлювати дані
 *
 * returns AlertModification
 **/
exports.apiV3AlertsStatusGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastActionIndex" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

