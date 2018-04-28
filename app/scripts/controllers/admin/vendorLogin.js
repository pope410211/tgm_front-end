(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('LoginCtrl', function(fireAuthService, fireDataService, $state, $sessionStorage) {
			var fireAuth = fireAuthService;
			var fireData = fireDataService;
			var storage = $sessionStorage;
			var self = this;
			this.loading = false;


			this.loginUser = function(email, password) {
				self.loading = true;
				fireAuth.login(email,password).then(function(loginRes) {

					var userId = loginRes.uid;
					console.log('userid', userId);
					fireData.getUserInfo(userId).then(function(userRes) {
						console.log('userRes', userRes);
						var userInfo = {
							name: userRes.name,
							roles: userRes.roles,
							sku: userRes.sku,
							uid: userId
						};
						storage.user = userInfo;
						var roleAuth = userInfo.roles;
						if ( roleAuth.admin === true || roleAuth.web === true ) {
							$state.go();
						} else {
							$state.go('vendorSales');
						}
					});
				}).catch(function(error) {
					console.error('Login Controller Error:', error);
				});
			};

			this.forgotPass = function(email) {
				console.log('emai', email);
				fireAuth.sendPasswordReset(email).then(function(emailRes) {
					console.log('email Sent', emailRes);
				});
			};
		}); // Enc Contoller
}()); // End IFFE