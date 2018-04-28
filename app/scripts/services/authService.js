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

			// auth.createUser = function(email, password) {

			// 	return fireAuth.$createUserWithEmailAndPassword(email, password).then(function(createRes) {
			// 		return createRes.uid;
			// 	});
			// };

			auth.sendPasswordReset = function(email) {
				return fireAuth.$sendPasswordResetEmail(email).then(function(res) {
					console.log('res', res);
					return true;
				}).catch(function(error) {
					console.error('Auht Service Reset Password: ', error);
					return error;
				});
			};


			return auth;
		});
}());