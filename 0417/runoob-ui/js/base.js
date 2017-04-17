var app = angular.module('demo',['ui.router']);
app.config(function($stateProvider){
	$stateProvider.state('html',{
		url:'/html',
		templateUrl:'template/html.html'
	}).state('html.page1',{
		url:'/page1',
		templateUrl:'template/page1.html',
		controller:'page1Ctrl'
	})
	//第三层路由
	.state('html.page1.a',{
		url:'/a',
		templateUrl:'template/page1A.html'
	}).state('html.page1.b',{
		url:'/b',
		template:'<p>b</p>'
	})
	
	
	.state('html.page2',{
		url:'/page2',
		templateUrl:'template/page1.html',
		controller:'page2Ctrl'
	}).state('html.page3',{
		url:'/page3',
		template:'<p>page3</p>'
	})
	
	
	.state('suggest',{
		url:'/suggest',
		templateUrl:'template/suggest.html'
	})
})
app.controller("page1Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'a'
	},{
		url:'#!/html/page1/b',
		name:'b'
	},{
		url:'#!/html/page1/c',
		name:'c'
	}]
})
app.controller("page2Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'aaa'
	},{
		url:'#!/html/page1/b',
		name:'bbb'
	},{
		url:'#!/html/page1/c',
		name:'ccc'
	}]
})
