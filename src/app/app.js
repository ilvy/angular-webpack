import angular from 'angular';
import ngRoute from 'angular-route';
import sideNav from '../public/modules/sideNav/sideNav';
// import RouteCtrl from '../next/next';

// import '../style/side-nav.css';

const MODULE_NAME = 'app';

var App = angular.module(MODULE_NAME, ['ngRoute','side-nav']);
    App.config(['$controllerProvider', '$routeProvider','$compileProvider', function($controllerProvider, $routeProvider,$compileProvider) {
        App.controller = $controllerProvider.register;
        // App.directive = $compileProvider.directive;
        $routeProvider
        .when('/login',{
            templateUrl:'/modules/login/login.html',
            controller:'login',
            resolve:{
                resolver:['$q',
                    function($q){
                        var deferred = $q.defer();
                        require.ensure('../public/modules/login/login.js',function(){
                            require('../public/modules/login/login.js');
                            deferred.resolve();
                        })
                        return deferred.promise;
                    }
                ]
            }
        })
        .when('/constant-error',{
            templateUrl:'/modules/constantError/constantError.html',
            controller:'constantError',
            resolve:{
                resolver:['$q',
                    function($q){
                        var deferred = $q.defer();
                        require.ensure('../public/modules/constantError/constantError.js',function(){
                            require('../public/modules/constantError/constantError.js');
                            deferred.resolve();
                        })
                        return deferred.promise;
                    }
                ]
            }
        })
        // .otherwise({redirectTo:'/login'});
    }]);
export default MODULE_NAME;