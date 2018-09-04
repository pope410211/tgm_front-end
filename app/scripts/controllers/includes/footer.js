(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('FooterCtrl', function () {
			var year = new Date().getFullYear();

			this.year = year;
		});
}());