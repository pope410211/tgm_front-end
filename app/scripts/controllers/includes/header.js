(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('HeaderCtrl', function ($state, $location, $anchorScroll, fireAuthService) {

			this.scrollTo = function(loc) {
				$location.hash(loc);
				$anchorScroll();
			};

			this.signOut = function() {
				fireAuthService.logOut().then(function() {
					$state.go('home');
				});
			};
		});
}());