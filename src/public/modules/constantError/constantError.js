import angular from 'angular';

let MODULE_NAME = 'app';

let App = angular.module(MODULE_NAME);
App.controller('constantError',['$http','$scope',($http,$scope) => {
	$http({
		url:'/FHH/EM1HTrain/courseWebCtrl/queryCourse?traceId=O-E.fs.4710-47218895&_fs_token=OJXXP3TcP3WjOs9aPYqqE30vBM8mOsGjCM4pE3bbP6OpDMKu',
		method:'post'
	}).success(function(results){
		$scope.errors = results.value;
	});
	$scope.errors = [
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ,
    {
        "appVersion":"测试内容v43z","cgi":"测试内容4h24","err_type":28408,"jsUrl":"测试内容x2j7","mobile":"测试内容653o","netType":"测试内容mj20","pf":"测试内容t3k1","url":"测试内容s146","witness":"测试内容765b"
    }
    ];
}]);

export default MODULE_NAME;