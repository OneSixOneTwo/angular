var app = angular.module("demo",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when('/page1',{
		templateUrl:'template/page1.html',
		controller:'page1Ctrl'
	}).when('/page2',{
		templateUrl:'template/page2.html',
		controller:'page2Ctrl'
	}).when('/page3',{
		templateUrl:'template/page3.html',
		controller:'page3Ctrl'
	}).otherwise({
		redirectTo:'/page1'
	})
})
app.controller("page1Ctrl",function($scope,$http){
	
})
app.controller("page2Ctrl",function($scope,$http){
	
})
app.controller("page3Ctrl",function($scope,$http){
	
})
app.directive("xsearch",function(){
	return {
		templateUrl:'directive/xsearch.html'
	}
})
app.directive("xnav",function(){
	return {
		templateUrl:'directive/xnav.html'
	}
})

