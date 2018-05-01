(function() {
'use strict';

	angular
		.module('AlertNotifications', [])
		.service('alertService', function($mdToast, $mdDialog) {
			var alerts = {};

			alerts.displayDialog = function(title, message, event) {
				console.log('title', title, message, event);
				$mdDialog.show(
					$mdDialog
					.alert()
					.parent(angular.element(document.querySelector('#popupContainer')))
					.clickOutsideToClose(true)
					.title(title)
					.htmlContent(message)
					.ariaLabel(title)
					.ok('OK')
					.targetEvent(event)
				);
			};

			alerts.customTemplate = function(controller,  template) {
				$mdDialog.show({
					controller: controller,
					controllerAs: 'ct',
					templateUrl: 'views/templates/' + template + '.tmpl.html',
					parent: angular.element(document.body),
					clickOutsideToClose:true,
					fullscreen: true // Only for -xs, -sm breakpoints.
				});
	
			};

			alerts.toast = function(message, tClass) {
				$mdToast.show(
					$mdToast.simple()
					.textContent(message)
					.position('top')
					.hideDelay(3500)
					.toastClass(tClass)
				  );
			};

			return alerts;
		});
}());