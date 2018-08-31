(function() {
'use strict';

	angular
		.module('ngTgmApp')
		.controller('MainCtrl', function () {

			this.images = [
				{
					name: 'Slideshow1.jpg'
				},
				{
					name: 'Slideshow2.jpg'
				},
				{
					name: 'Slideshow3.jpg'
				},
				{
					name: 'Slideshow4.jpg'
				},
				{
					name: 'Slideshow5.jpg'
				},
				{
					name: 'Slideshow6.jpg'
				},
				{
					name: 'Slideshow7.jpg'
				}
			];
		});
}());