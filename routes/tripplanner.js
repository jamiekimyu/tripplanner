var express = require('express');
var router = express.Router();

var Activity = require('../models/activity');
var Hotel = require('../models/hotel');
var Place = require('../models/place');
var Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next){
  var outerScopeContainer = {};
Hotel.findAll()
.then(function (dbHotels) {
  outerScopeContainer.dbHotels = dbHotels;
  return Restaurant.findAll();
})
.then(function (dbRestaurants) {
  outerScopeContainer.dbRestaurants = dbRestaurants;
  return Activity.findAll();
})
.then(function (dbActivities) {
  res.render('index', {
    templateHotels: outerScopeContainer.dbHotels,
    templateRestaurants: outerScopeContainer.dbRestaurants,
    templateActivities: dbActivities
  });
})
.catch(next);
});


module.exports = router;
