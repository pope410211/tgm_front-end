(function() {
'use strict';
	angular
		.module('ngTgmApp')
		.controller('VendorCtrl', function($state, fireDataService, $sessionStorage) {
			var userInfo = $sessionStorage.user;
			var self = this;
			this.loading = true;
			this.authed = false;

			console.log('user', userInfo);
			/*
				TODO: Check Authentication instead of SessionStorage.
			*/
			if (typeof userInfo !== 'undefined') {
				if (userInfo.roles.admin) {
					this.authed = true;
					this.vendorSku = userInfo.sku[0];
					this.selectedSku = userInfo.sku[0];
					this.vendorSkuArray = userInfo.sku;
				} else {
					this.vendorSku = userInfo.sku;
				}
				
				this.vendorName = userInfo.name;

				this.query = {
					order: 'date',
					limit: 10,
					page: 1
				};
				console.log('this', this.vendorSku);
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

				this.getVendSales = function(vendSku) {
					console.log('vend', vendSku);
					fireDataService.getVendorSale(vendSku).then(function(salesRes) {
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
				}
			} else {
				$state.go('login');
			}

		});
}());