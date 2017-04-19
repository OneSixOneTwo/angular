//路由模块
;
(function() {
	var routers = angular.module("routers", [])
	routers.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("index",{
			url:"/index",
			templateUrl:"template/index.html"
		}).state("index.recommend",{
			url:"/recommend",
			templateUrl:"template/recommend.html"
		}).state("index.society",{
			url:"/society",
			templateUrl:"template/society.html"
		}).state("detail",{
			url:"/detail",
			templateUrl:"template/detail.html"
		});
		$urlRouterProvider.when("","/index")
	}])
})();