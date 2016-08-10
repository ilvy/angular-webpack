import angular from 'angular';

let MODULE_NAME = 'app';

let App = angular.module(MODULE_NAME);
App.controller('login',['$scope',($scope) => {
	$scope.title = "登录";
}]);

export default MODULE_NAME;