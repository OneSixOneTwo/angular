var app=angular.module("newApp",["ui.router","routers","controllers","directives","services","filters"]);!function(){angular.module("controllers",[]).controller("indexCtrl",["$scope",function(e){e.name="ws"}])}(),function(){angular.module("directives",[]).directive("xheader",function(){return{}})}(),function(){angular.module("filters",[]).filter("ed",function(){return function(e){}})}(),function(){angular.module("routers",[]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("index",{url:"/index",templateUrl:"template/index.html"}).state("index.recommend",{url:"/recommend",templateUrl:"template/recommend.html"}).state("index.society",{url:"/society",templateUrl:"template/society.html"}).state("detail",{url:"/detail",templateUrl:"template/detail.html"}),t.when("","/index")}])}(),function(){angular.module("services",[]).service("tool",function(){return{}})}(),angular.bootstrap(document,["newApp"]);