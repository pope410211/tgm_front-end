(function() {
'use strict';
	var config = {
		apiKey: "AIzaSyCEe3plaRve9G8vZLiP5PMQy4v2K_MwYPI",
		authDomain: "turtlegirlsmarket-64f1c.firebaseapp.com",
		databaseURL: "https://turtlegirlsmarket-64f1c.firebaseio.com",
		projectId: "turtlegirlsmarket-64f1c",
		storageBucket: "turtlegirlsmarket-64f1c.appspot.com",
		messagingSenderId: "134773211753"
	};
		firebase.initializeApp(config);
	angular
		.module('ngTgmApp', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'ui.router',
			'ngMaterial',
			'ngMessages',
			'ngMdIcons',
			'ngStorage',
			'md.data.table',
			'firebase',
			'FireAuth',
			'FireData',
			'TGMTheme'
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
			var loginHeaderObj = {
				templateUrl: 'views/includes/login-header.html',
				controller: 'HeaderCtrl',
				controllerAs: 'nav'
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
			})
			.state('vendorSales', {
				url: '/vendor-sales',
				views: {
					'header': loginHeaderObj,
					'main': {
						templateUrl: 'views/admin/vendorSales.html',
						controller: 'VendorCtrl',
						controllerAs: 'vendor'
					},
					footer: footerObj
				}
			});
		});
}());
