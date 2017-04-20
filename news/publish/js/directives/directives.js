//组件和指令模块
;
(function() {
	var directives = angular.module("directives", []);
	//头部
	directives.directive("wheader", function() {
		return {
			templateUrl: "directives/wheader.html"
		}
	})
	//底部
	directives.directive("wfooter", function() {
		return {
			templateUrl: "directives/wfooter.html"
		}
	})
	//轮播图
	directives.directive("wswiper", function() {
		return {
			templateUrl: "directives/wswiper.html",
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	})
	//新闻列表
	directives.directive("wlist", function() {
		return {
			templateUrl: "directives/wlist.html",
		}
	})
})();