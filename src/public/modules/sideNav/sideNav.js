import angular from 'angular';
// import '../style/side-nav.css';

const MODULE_NAME = 'side-nav';

var sideNavApp = angular.module(MODULE_NAME,[]);
sideNavApp.directive('sideNav',[function(){
	return {
		restrict:'EA',
		templateUrl:'/modules/sideNav/sideNav.html',
		controller:'sidenavController'
		// template:'test'
	};
}]);

sideNavApp.controller('sidenavController',['$scope','$http',function($scope,$http){
	$http({
		url:'../../mocks/nav.json',
		method:'get'
	}).success(function(results){
		console.log(results)
		$scope.navList = results;
	});
	$scope.toggle = function($index){
		$scope.ind = $index;
		console.log($index)
	}
}]);

export default sideNavApp;