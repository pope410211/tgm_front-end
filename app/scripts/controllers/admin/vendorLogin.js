(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('LoginCtrl', function(fireAuthService, fireDataService, $state, $sessionStorage) {
			var fireAuth = fireAuthService;
			var fireData = fireDataService;
			var storage = $sessionStorage;
			this.login = function(email, password) {
				fireAuth.login(email,password).then(function(loginRes) {

					var userId = loginRes.uid;
					fireData.getUserInfo(userId).then(function(userRes) {
						var userInfo = {
							name: userRes.name,
							roles: userRes.roles,
							sku: userRes.sku,
							uid: userId
						};
						storage.user = userInfo;
						var roleAuth = userInfo.roles;
						if ( roleAuth.admin === false || roleAuth.web === false ) {
							$state.go();
						} else {
							$state.go('vendorPage');
						}
					});
				}).catch(function(error) {
					console.error('Login Controller Error:', error);
				});
			};
		}); // Enc Contoller
}()); // End IFFE