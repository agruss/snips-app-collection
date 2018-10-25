'use strict';
var express = require('express');
var router = express.Router();

const appConfig = require('../../intent-listener/config.json');

/* GET home page. */
router.get('/', function (req, res) {
	var apps = [];
	appConfig.apps.forEach(app => {
		const portIndex = 17;
		var urlEndIndex = app.intents[0].url.indexOf('/', portIndex);
		
		var config = {
			name: app.name,
			port: app.intents[0].url.substring(portIndex, urlEndIndex)
		};
		
		apps.push(config);
	});

	res.render('index', {
		title: 'Admin Control Panel', appNames: apps});
});

module.exports = router;
