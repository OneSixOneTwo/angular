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
	controllers.controller("recommendCtrl", function($scope, $http, $timeout) {
		$scope.title = "推荐";
		//默认显示第一页
		$scope.page = 0;
		$scope.news = [];
		//控制loading
		$scope.isLoading = false;
		$scope.loadMore = function() {
			//点击的时候出现loading
			$scope.isLoading = true;
			$timeout(function() {
				$http({
					//url: "js/news.json",
					url: "http://localhost:81/news/php/index.php/news_api/show_detail_by_channel_id",
					method: "GET",
					params: {
						channel_id: 6,
						page: $scope.page++
					}
				}).then(function(data) {
					$scope.isLoading = false;
					$scope.news = $scope.news.concat(data.data.news_list);
				})
			}, 1500)
		}
		$scope.loadMore();
		
		//弹窗
		$scope.isShowdialog = false;
		$scope.showdialog = function(){
			console.log("1")
			$scope.isShowdialog = true;
		}
		
		$scope.searchName = "";
		//搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
			$scope.isShowSearchBar = true;
		}
		
		//清空搜索框
		$scope.searchClear = function(){
			//$scope.isShowSearchBar = false;
			$scope.searchName = "";
		}
	})
	controllers.controller("detailCtrl", function($scope, $location, $http, $state) {
		console.log($location.search());
		console.log($state.params)
		$http({
			//url:"js/detail.json",
			url: "http://localhost:81/news/php/index.php/news_api/show_detail",
			method: "GET",
			params: {
				id: $state.params.id
			}
		}).then(function(data) {
			console.log(data)
			$scope.newData = data.data.news_list[0]
		})
		
		//默认隐藏预览图片组件
		$scope.isShowGallery = false;
		$scope.showGallery = function(){
			$scope.isShowGallery = true;
		}
	})
	controllers.controller("entertainCtrl", function($scope) {
		$scope.title = "娱乐"
	})
})();