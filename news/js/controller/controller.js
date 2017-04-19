//控制器模块
;
(function() {
	var controllers = angular.module("controllers", []);
	controllers.controller("indexCtrl", ["$scope", function($scope) {
		$scope.name = "ws"
	}])
})();