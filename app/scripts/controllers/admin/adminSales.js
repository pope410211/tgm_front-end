(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('AdminCtrl', function($state, fireDataService, $sessionStorage){
			var storage = $sessionStorage;
			var fireData = fireDataService;
			this.authed = true;
			console.log('here');
		});
}());