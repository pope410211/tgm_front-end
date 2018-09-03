(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('HeaderCtrl', function ($state, $location, $anchorScroll, fireAuthService) {

			this.scrollTo = function(loc) {
				$location.hash(loc);
				$anchorScroll();
			};

			/*
				TODO: Make this Dynamic by checking Firebase to verify use is logged in.
			*/
			if($state.current.name === 'vendorSales') {
				this.userLoggedIn = true;
			} else {
				this.userLoggedIn = false;
			}

			this.signOut = function() {
				fireAuthService.logOut().then(function() {
					$state.go('home');
				});
			};
		});
}());