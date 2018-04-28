(function() {
'use strict';
	angular
		.module('ngTgmApp')
		.controller('VendorCtrl', function($state, $scope, fireDataService, $sessionStorage) {
			var userInfo = $sessionStorage.user;
			if(typeof userInfo !== 'undefined') {
				this.vendorSku = userInfo.sku;
				this.vendorName = userInfo.name;
				fireDataService.getVendorSale(this.vendorSku).then(function(salesRes) {
					$scope.vendorSales = salesRes;
	
					$scope.itemTotal = 0;
					$scope.salesTotal = 0;
	
					for (var i =0; i < $scope.vendorSales.length; i++) {
						var salePrice = parseInt($scope.vendorSales[i].price);
						var itemQty = parseInt($scope.vendorSales[i].qty);
						$scope.itemTotal += itemQty;
						$scope.salesTotal += salePrice;
	
					}
	
				}).catch(function(error) {
					console.log('error', error);
				});
			} else {
				$state.go('login');
			}

		});
}());