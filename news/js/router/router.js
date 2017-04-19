//路由模块
;
(function() {
	var routers = angular.module("routers", [])
	routers.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		//第一层ui-view的逻辑
		$stateProvider.state("index", {
				url: "/index",
				templateUrl: "template/index.html",
				controller: "indexCtrl"
			})
			//推荐
			.state("index.recommend", {
				url: "/recommend",
				templateUrl: "template/recommend.html",
				controller: "recommendCtrl"
			})
			//娱乐
			.state("index.entertain", {
				url: "/entertain",
				templateUrl: "template/entertain.html",
				controller: "entertainCtrl"
			})
			//社会
			.state("index.society", {
				url: "/society",
				templateUrl: "template/society.html"
			})
			//军事
			.state("index.military", {
				url: "/military",
				templateUrl: "template/military.html"
			})
			//新闻详情页
			.state("detail", {
				url: "/detail/:id",
				templateUrl: "template/detail.html",
				controller: "detailCtrl"
			});
		$urlRouterProvider.when("", "/index")
	}])
})();