(function() {
'use strict';
	angular
		.module('FireData', [])
		.service('fireDataService', function(firebase, $firebaseObject) {
			var fireDb = {};
			var fire = firebase;
			var userNode = '/Users/';

			fireDb.getUserInfo = function(uid) {
				console.log('uid', userNode + uid);
				var ref = fire.database().ref(userNode).child(uid);
				var obj = $firebaseObject(ref);
				return obj.$loaded().then(function(res) {
					return res;
				});
			};

			return fireDb;
		});
}());