(function() {
'use strict';



	angular
		.module('TGMTheme', ['ngMaterial']).config(function ($mdThemingProvider) {

			var customPrimary = {
				'50': '#dcf2f1',
				'100': '#c9ebea',
				'200': '#b7e4e2',
				'300': '#a4dddb',
				'400': '#92d6d3',
				'500': '#7fcfcc',
				'600': '#6cc8c5',
				'700': '#5ac1bd',
				'800': '#47bab6',
				'900': '#3fa9a5',
				'A100': '#eef9f8',
				'A200': '#ffffff',
				'A400': '#ffffff',
				'A700': '#389693'
			};
			$mdThemingProvider
			.definePalette('customPrimary', 
				customPrimary);

			var customAccent = {
				'50': '#0a1516',
				'100': '#122527',
				'200': '#1a3539',
				'300': '#22464a',
				'400': '#2a565c',
				'500': '#32676d',
				'600': '#428790',
				'700': '#4a98a2',
				'800': '#54a6b1',
				'900': '#66afb9',
				'A100': '#428790',
				'A200': '#3a777f',
				'A400': '#32676d',
				'A700': '#77b9c1'
			};
			$mdThemingProvider
			.definePalette('customAccent', 
				customAccent);

			var customWarn = {
				'50': '#ffb280',
				'100': '#ffa266',
				'200': '#ff934d',
				'300': '#ff8333',
				'400': '#ff741a',
				'500': '#ff6400',
				'600': '#e65a00',
				'700': '#cc5000',
				'800': '#b34600',
				'900': '#993c00',
				'A100': '#ffc199',
				'A200': '#ffd1b3',
				'A400': '#ffe0cc',
				'A700': '#803200'
			};
			$mdThemingProvider
			.definePalette('customWarn', 
				customWarn);

			var customBackground = {
				'50': '#ffffff',
				'100': '#ffffff',
				'200': '#ffffff',
				'300': '#ffffff',
				'400': '#fcf8f0',
				'500': '#f8eddb',
				'600': '#f4e2c6',
				'700': '#f0d8b0',
				'800': '#eccd9b',
				'900': '#e7c286',
				'A100': '#ffffff',
				'A200': '#ffffff',
				'A400': '#ffffff',
				'A700': '#e3b870'
			};
			$mdThemingProvider
			.definePalette('customBackground', 
				customBackground);

			$mdThemingProvider.theme('default')
			.primaryPalette('customPrimary')
			.accentPalette('customAccent')
			.warnPalette('customWarn')
			.backgroundPalette('customBackground');
		});


}());