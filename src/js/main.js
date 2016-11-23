var magApp = angular.module('magApp', []);


magApp.controller('productsCtrl', function($scope, $http) {
	$http.get("js/products.js").success(function(data) {
		$scope.products = data;
	});

});