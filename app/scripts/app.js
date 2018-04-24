(function() {
'use strict';

	angular
		.module('ngTgmApp', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'ui.router',
			'firebase',
			'ngMaterial',
			'ngMessages',
			'FireAuth'
		])
		.config(function ($stateProvider, $urlRouterProvider) {
			var headerObj = {
				templateUrl: 'views/includes/header.html',
				controller: 'HeaderCtrl',
				controllerAs: 'header'
			};
			var footerObj = {
				templateUrl: 'views/includes/footer.html',
				controller: 'FooterCtrl',
				controllerAs: 'footer'
			};
			$urlRouterProvider.when('/', '/home');
			$urlRouterProvider.otherwise('/home');
			$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'header': headerObj,
					'main': {
						templateUrl: 'views/main.html',
						controller: 'MainCtrl',
						controllerAs: 'main'
					},
					'footer': footerObj
				}
			})
			.state('login', {
				url:'/vendor-login',
				views: {
					'header': headerObj,
					'main': {
						templateUrl: 'views/admin/login.html',
						controller: 'LoginCtrl',
						controllerAs: 'login'
					},
					'footer': footerObj
				}
			});
		});
}());
