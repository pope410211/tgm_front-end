(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('HeaderCtrl', function ($location, $anchorScroll) {

			this.scrollTo = function(loc) {
				$location.hash(loc);
				$anchorScroll();
			};
		});
}());