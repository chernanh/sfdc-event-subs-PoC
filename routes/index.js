var express = require('express');
var router = express.Router();

var Promise = require("bluebird");

var nforce = require('nforce');
var org = require('../app');

const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Salesforce Platform Events <-> Heroku Demo' });
});

/* Creates a new the record */
router.post('/', function(req, res, next) {
	console.log('In router post');
	var newEvent = nforce.createSObject('vrk99__Testing_Event__e');
	newEvent.set('vrk99__Customer_ID__c', req.body.customerId);
	newEvent.set('vrk99__Event_Type__c', req.body.eventType);
	newEvent.set('vrk99__Ban_Customer__c', req.body.bancustomer);
	newEvent.set('vrk99__Parent_Event__c', req.body.parentEvent);  

	org.org.insert({ sobject: newEvent })
  
});

module.exports = router;
