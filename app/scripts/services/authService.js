(function() {
'use strict';
	angular
		.module('FireAuth', [])
		.service('fireAuthService', function($firebaseAuth) {
			var auth = {};
			var fireAuth = $firebaseAuth();

			auth.login = function(email, password) {
				return fireAuth.$signInWithEmailAndPassword(email, password)
				.then(function(user) {
					return user;
				}).catch(function(error) {
					console.error('Auth Service Login:', error);
					return error;
				});
			};

			auth.logOut = function() {
				return fireAuth.$signOut();
			};
			return auth;
		});
}());