(function() {
'use strict';
	angular
		.module('FireData', [])
		.service('fireDataService', function(firebase, $firebaseObject, $firebaseArray) {
			var fireDb = {};
			var fire = firebase;
			var userNode = '/Users/';
			var salesNode = '/productSales/';

			fireDb.getUserInfo = function(uid) {
				var ref = fire.database().ref(userNode).child(uid);
				var obj = $firebaseObject(ref);
				return obj.$loaded().then(function(res) {
					return res;
				}).catch(function(err) {
					return err;
				});
			};

			fireDb.getVendorSale = function(sku) {
				var ref = fire.database().ref(salesNode).child(sku);
				var obj = $firebaseArray(ref);

				return obj.$loaded().then(function(res) {
					return res;
				}).catch(function(err) {
					return err;
				});
			};

			return fireDb;
		});
}());