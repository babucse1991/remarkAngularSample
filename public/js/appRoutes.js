
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LogInCtrlController'
	})
	
	.when('/demo', {
		templateUrl: 'views/demo.html',
		controller: 'DemoController'
	});
	
	 $locationProvider.html5Mode(false);
	    
	    $routeProvider.otherwise({
	        redirectTo: '/login',
	        controller: ''
	    });

}]);
