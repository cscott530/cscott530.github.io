var app = angular.module('cscott530', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/index.html',
		controller: 'IndexCtrl'
	}).when('/presentations/:pres', {
		templateUrl: 'pages/presentation.html',
		controller: 'PresentationCtrl'
	}).otherwise({
		redirectTo: '/'
	})
});
app.controller('IndexCtrl', function($scope) {
	
}).controller('PresentationCtrl', function($scope) {

});