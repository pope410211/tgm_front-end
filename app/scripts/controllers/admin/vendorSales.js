(function() {
'use strict';
	angular
		.module('ngTgmApp')
		.controller('VendorCtrl', function($state, fireDataService, $sessionStorage) {
			var userInfo = $sessionStorage.user;
			var self = this;
			this.loading = true;
			/*
				TODO: Check Authentication instead of SessionStorage.
			*/
			if (typeof userInfo !== 'undefined') {
				this.vendorSku = userInfo.sku;
				this.vendorName = userInfo.name;

				this.query = {
					order: 'date',
					limit: 10,
					page: 1
				};

				fireDataService.getVendorSale(this.vendorSku).then(function(salesRes) {
					self.vendorSales = salesRes;
	
					self.itemTotal = 0;
					self.salesTotal = 0;
	
					for (var i =0; i < self.vendorSales.length; i++) {
						var salePrice = parseInt(self.vendorSales[i].price);
						var itemQty = parseInt(self.vendorSales[i].qty);
						self.itemTotal += itemQty;
						self.salesTotal += salePrice;
	
					}
					self.loading = false;
				}).catch(function(error) {
					console.log('error', error);
				});
			} else {
				$state.go('login');
			}

		});
}());