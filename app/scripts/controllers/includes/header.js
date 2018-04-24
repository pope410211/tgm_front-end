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
				console.log('click');
				fireAuthService.logOut().then(function(loggedOut) {
					$state.go('home');
				});
			};
		});
}());