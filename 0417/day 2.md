## 路由并列关系
view,给每个ui-view加多一个属性值name并标记名字
```javascript
<div ui-view name="view1"></div>
<div ui-view name="view2"></div>
```
js，然后在config的state函数对象里面添加views属性值，并对应定义各自的模板和控制器
```javascript
app.config(function($stateProvider){
	$stateProvider.state('index',{
		url:'/index',
		//template:'<p>index</p>'
		views:{
			'view1':{
					template:'<p>index first</p>'
			},
			'view2':{
					template:'<p>index second</p>'
			}
			}
	})
})
```

## 路由之间通信数据

（控制器之间通信数据&&页面之间通信数据）

在url上传递和接受（拼接参数到url上，然后用$loacion.search()接受）=== 路由上配置以下代码
```javascript
			.state('page2',{
				url:'/page2/:id/:name',//参数用:params的形式，多个参数的话用/隔开
				templateUrl:'template/page2.html',
				controller:'page2Ctrl'
			})
```
然后在控制器中用$state服务接受
```javascript
app.controller("page2Ctrl",function($state){
			$state.params.id
			$state.params.name
})
```

## 模块化
```javascript
//主模块
angular.module('demo', ['directives', 'services', 'filters', 'controllers']);;
		//控制器
		;
		(function() {
			var controllers = angular.module('controllers', []);
			controllers.controller('indexCtrl', function($scope, sum) {
			//code
			})
		})()
		//组件
		;
		(function() {
			var directives = angular.module('directives', []);
			directives.directive('xheader', function() {
			})
		})()
		//服务
		;
		(function() {
			var services = angular.module('services', [])
			services.service('sum', function() {})
		})()
		//过滤器
		;
		(function() {
			var filters = angular.module('filters', [])
			filters.filter('ed', function() {})
		})()
```

## 表单验证
|value|value|
|-|-|
|$dirty|表单有填写记录|
|$valid|字段内容合法的|
|$invalid|字段内容是非法的|
|$pristine|表单没有填写记录|
|$error.required|值是必须的|

## 登录注册
1. 首先获取用户输入的用户名和密码(ng-model->$scope)
2. 根据后端给我们提供的接口,把用户输入的信息提交到服务器($http,post)
3. 用ng-cookie保存后端给我们的token
4. 判断是否登录状态(自动登录),我们就把token提交服务器作为验证,如果验证成功则继续逻辑,如果失败则返回登录注册页面

