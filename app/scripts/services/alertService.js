(function() {
'use strict';

	angular
		.module('AlertNotifications', [])
		.service('alertService', function() {
			var alerts = {};

			return alerts;
		});
}());