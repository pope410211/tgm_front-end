(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('LoginCtrl', function(fireAuthService, fireDataService, alertService, $state, $sessionStorage, $mdDialog) {
			var fireAuth = fireAuthService;
			var fireData = fireDataService;
			var storage = $sessionStorage;
			var self = this;
			this.loading = false;


			this.loginUser = function(email, password) {
				self.loading = true;
				fireAuth.login(email,password).then(function(loginRes) {
					console.log('login', loginRes);
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
								var roleAuth = userInfo.roles;
								if ( roleAuth.admin === true || roleAuth.web === true ) {
									$state.go();
								} else {
									$state.go('vendorSales');
								}
							});
						} else {
							var title = 'Authentication Error';
							var message = '<b>Code: </b>' + loginRes.code + '<br /> <b>Message: </b>' + loginRes.message;
							alertService.displayDialog(title, message, 'error');
							self.loading = false;
						}
					} catch(e) {
						console.error('LoginCtrl | Login Error: ', e);
						var title = 'Authentication Error';
						var message = '<b>Code: </b>' + e.code + '<br /> <b>Message: </b>' + e.message;
						alertService.displayDialog(title, message, 'error');
						self.loading = false;
					}
				}).catch(function(error) {
					try {
						var title = 'Authentication Error';
						var message = '<b>Code: </b>'+ error.code + ' <br />  <b>Message: </b>' + error.message;
						alertService.displayDialog(title, message, 'error');
						self.loading = false;
					} catch(e) {
						var title = 'Authentication Error';
						var message = '<b>Code: </b> <br />  <b>Message: </b> There was error logging in.<br />Please close your browser and try again.<br />If problem persists, contact Turtle Girls Market';
						alertService.displayDialog(title, message, 'error');
						self.loading = false;
					}
				});
			};

			this.forgotPass = function() {
				var ct = 'LoginCtrl';
				var templ = 'forgotPass';
				return alertService.customTemplate(ct, templ);
			};

			this.close = function() {
				$mdDialog.hide();
			};

			this.sendResetEmail = function(email) {
				console.log('email', email);
				fireAuth.sendPasswordReset(email).then(function(emailRes) {
					console.log('emailRs', emailRes);
					$mdDialog.hide();
					alertService.toast('Reset Password Email Sent', 'toast-success');
					console.log('email Sent', emailRes);
				}).catch(function(err) {
					console.error('LoginCtrl | SendResetEmail: ', err);
				});
			};
		}); // End Contoller
}()); // End IFFE