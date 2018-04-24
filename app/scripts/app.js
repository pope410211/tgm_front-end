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
			'ngMessages'
		])
		.config(function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.when('/', '/home');
			$urlRouterProvider.otherwise('/home');
			console.log('Sanity Check');
			$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'header': {
						templateUrl: 'views/includes/header.html',
						controller: 'HeaderCtrl',
						controllerAs: 'header'
					},
					'main': {
						templateUrl: 'views/main.html',
						controller: 'MainCtrl',
						controllerAs: 'main'
					},
					'footer': {
						templateUrl: 'views/includes/footer.html',
						controller: 'FooterCtrl',
						controllerAs: 'footer'
					}
				}
			});
			console.log('state', $stateProvider);
		});
}());
