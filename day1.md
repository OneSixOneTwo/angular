## Install 
就打开nodejs的命令行，然后输入以下代码下载angula框架
```
npm install angular
```
**注意:如果在这个后面加上@的话，就是制定版本下载**
```
npm install angular@X.X.X
```
jQ是(工具)**库**,angular(ng)是**框架**,框架比库大一个等级，
1. 库是一堆封装的方法，
2. 框架是一个图纸，不仅提供方法，还提供实现的思路

jQ比较轻量级,angular比较重

## Require
在引入的时候**一般**使用未压缩版本
压缩和未压缩的区别在于，压缩的JS，是把一些变量名用简单的字符代替，然后把一些换行跟空格跟注释删掉

把Nodejs下载好的angular框架(未压缩版本)复制到项目JS目录
用`script`标签引入angular框架到HTML页面中
```javascript
	<script src="js/angular.js"></script>
```

## Module
angular是用模块化开发的，所以一般来说，一个angular程序就由一个主模块完成所有功能，一个主模块是由N个小模块组装成的
定义一个模块的方法就是`angular.module()`方法，接受两个参数
```javascript
	angular.module("模块的名字",['引入分模块的名字'])
```
模块化开发，方便我们团队开发，方便分工合作，方便找出问题的根源
```javascript
	//定义一个模块,是一个模块函数,主模块
	angular.module("app1",['app2','app3'])
	//小模块
	angular.module("app2",[])
	angular.module("app3",[])
```
ng-app作为一个属性值可以放在任何标签上，建议放在`<html>`和`<body>`标签上，放在那个标签上，那就是主模块控制那个标签的闭合作用域
```javascript
	ng-app="主模块的名字"
```
**ng-controller**作为控制器的定义标签，放在ng-app闭合标签的范围内

**ng-app**就是整个程序的作用域
abc控制器和cbd都是由demo主模块划分出来的小作用域
```javascript
<html ng-app="demo">
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div ng-controller="abc">
			
		</div>
		<div ng-controller="cbd">
			
		</div>
	</body>
</html>
```
定义控制器就是用`.controller()`在主模块的基础上链式调用，此函数第一个参数就是控制器的名字，第二个参数就是数组，数组里面放一个匿名函数，此匿名函数就是该控制器的逻辑
```javascript
	angular.module("demo",[])
		.controller("控制器的名字",[function(){
			//code 控制器的逻辑
		}])
		.controller("控制器的名字",[function(){
			
		}]);
```

## Scope
定义完一个控制器后，在控制器的第二个参数(函数)里面注入一个`$scope`的形参，$scope就是控制所在范围的绑定的值
`$scope`=>`{{}}`
`$scope.name`=>`{{name}}`
控制层 C
```javascript
.controller("abc",function($scope){
			$scope//是一个对象
			$scope.name  = "laoxie";
			$scope.age = 18
		})
```
视图层 V
```javascript
<div ng-controller="abc">
			<p>{{name}}</p>
			<p>{{age}}</p>
		</div>
```
表达式：{{}},两个大括号可以放在任何地方,只要$scope定义了，{{}}对应显示对应的值
可以放在标签里面，可以放在属性值里面
```javascript
	<p>{{name}}</p>
	<p id="{{name}}">{{name}}</p>
	<style>
		.blue{
			color: {{color}};
		}
	</style>
```