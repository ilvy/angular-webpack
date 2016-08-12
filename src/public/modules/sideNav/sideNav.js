import angular from 'angular';

const MODULE_NAME = 'side-nav';

var sideNavApp = angular.module(MODULE_NAME,[]);
sideNavApp.directive('sideNav',[function(){
	return {
		restrict:'EA',
		templateUrl:'/modules/sideNav/sideNav.html',
		controller:'sidenavController',
		link:function($scope){

		},
		compile:function(){

		}
		// template:'test'
	};
}]);

sideNavApp.controller('sidenavController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$http({
		url:'../../mocks/nav.json',
		method:'get'
	}).success(function(results){
		console.log(results)
		$scope.navList = results;
		let currModule = getCurrentModule(results);
		$scope.ind = currModule.ind;
		$rootScope.moduleName = currModule.name;
	});
	$scope.toggle = function($index){
		$scope.ind = $index;
		console.log($index);
	}
	$scope.changeModule = function(moduleName){
		$rootScope.moduleName = moduleName;
	}
}]);

let getCurrentModule = (navList) => {
	let hashName = window.location.hash.substring(2);
	let navObj,
		subLiLen,
		liObjs;
	for (let i = 0; i <= navList.length - 1; i++) {
		navObj = navList[i];
		liObjs = navObj.value;
		subLiLen = liObjs && liObjs.length;
		for(let j = 0; navObj.value && j <= subLiLen - 1; j++){
			if(hashName == liObjs[j].href.substring(1)){
				return angular.extend({ind:i},liObjs[j]);
			}
		}
	}
}

sideNavApp.directive('mainHeader',['$http',function($http){
    return {
        restrict:'EA',
        templateUrl:'/modules/sideNav/mainHeader.html'
    };
}]);

sideNavApp.directive('pxHeader',['$http',function($http){
    return {
        restrict:'EA',
        templateUrl:'/modules/sideNav/header.html'
    };
}]);

export default sideNavApp;