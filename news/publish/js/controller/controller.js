//控制器模块
;
(function() {
	var controllers = angular.module("controllers", []);
	controllers.controller("indexCtrl", ["$scope", function($scope) {
		$scope.name = "ws";
		console.log("ok");
		//默认的选项
		$scope.item = 0;
		$scope.itemOn = function(item) {
			$scope.item = item;
		}
	}])
	controllers.controller("recommendCtrl", function($scope, $http) {
		$scope.title = "推荐";
		//默认显示第一页
		$scope.page = 0;
		$scope.news = [];
		$scope.loadMore = function() {
			$http({
				url: "js/news.json",
				method: "GET",
				params: {
					channel_id: 6,
					page: $scope.page++
				}
			}).then(function(data) {
				$scope.news = $scope.news.concat(data.data.news_list);
			})
		}
		$scope.loadMore();
	})
	controllers.controller("detailCtrl", function($scope,$location,$http,$state) {
		console.log($location.search());
		console.log($state.params)
		$http({
			url:"js/detail.json",
			method: "GET",
			params:{
				id:$state.params.id
			}
		}).then(function(data){
			console.log(data)
			$scope.newData = data.data.news_list[0]
		})
	})
	controllers.controller("entertainCtrl", function($scope) {
		$scope.title = "娱乐"
	})
})();