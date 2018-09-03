(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('LoginCtrl', function(fireAuthService, fireDataService, $state, $sessionStorage) {
			var fireAuth = fireAuthService;
			var fireData = fireDataService;
			var storage = $sessionStorage;
			var self = this;
			this.loader = false;

			this.loginUser = function(email, password) {
				self.loader = true;
				fireAuth.login(email,password).then(function(loginRes) {
					try {
						if (typeof loginRes.email !== 'undefined') {
							var userId = loginRes.uid;
							fireData.getUserInfo(userId).then(function(userRes) {
								var userInfo = {
									name: userRes.name,
									roles: userRes.roles,
									sku: userRes.sku,
									uid: userId
								};
								storage.user = userInfo;
								// var roleAuth = userInfo.roles;
								// if ( roleAuth.admin === true || roleAuth.web === true ) {
								// 	$state.go('adminSales');
								// } else {
									$state.go('vendorSales');
								// }
							});
						} else {
							var title = 'Authentication Error';
							var message = '<b>Code: </b>' + loginRes.code + '<br /> <b>Message: </b>' + loginRes.message;
							alert(title + '\n' + message);
							self.loader = false;
						}
					} catch(e) {
						console.error('LoginCtrl | Login Error: ', e);
						var title = 'Authentication Error';
						var message = '<b>Code: </b>' + e.code + '<br /> <b>Message: </b>' + e.message;
						alert(title + '\n' + message);
						self.loader = false;
					}
				}).catch(function(error) {
					try {
						var title = 'Authentication Error';
						var message = '<b>Code: </b>'+ error.code + ' <br />  <b>Message: </b>' + error.message;
						alert(title + '\n' + message);
						self.loader = false;
					} catch(e) {
						var title = 'Authentication Error';
						var message = '<b>Code: </b> <br />  <b>Message: </b> There was error logging in.<br />Please close your browser and try again.<br />If problem persists, contact Turtle Girls Market';
						alert(title + '\n' + message);
						self.loader = false;
					}
				});
			};

			this.forgotPass = function() {
				var ct = 'LoginCtrl';
				var templ = 'forgotPass';
				return alertService.customTemplate(ct, templ);
			};

			this.close = function() {
				// $mdDialog.hide();
			};

			this.sendResetEmail = function(email) {
				fireAuth.sendPasswordReset(email).then(function(emailRes) {
					// console.log('emailRs', emailRes);
					alert('Password Reset');
				}).catch(function(err) {
					console.error('LoginCtrl | SendResetEmail: ', err);
				});
			};
		}); // End Contoller
}()); // End IFFE