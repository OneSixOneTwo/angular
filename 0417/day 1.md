###ng路由
1. 下载ng路由文件
2. 引入angular-route.js到项目中,放在angular.js下面,然后在代码里面引入`ngRoute`模块
```javascript
<script src="../js/angular-route.js"></script>
```

```javascript
var app = angular.module('demo',['ngRoute'])
```
3. 配置路由
```javascript
app.config(function($routeProvider){
			$routeProvider.when("/index",{
				template:'<p>第一页</p>'
			}).when("/home",{
				template:'<p>第二页</p>'
			})
		})
```
4. 视图层上放
```javascript
<div ng-view=""></div>
```

5. 我们要呈现路由所在的页面，我们在url基础上加`#!/路由的名字`
```javascript
url + #!/路由的名字
```

## ui路由

### 下载
```javascript 
npm install angular-ui-router
```
### 引入ui-router文件
```javascript
<script src="../js/angular.js"></script>
<script src="../js/angular-ui-router.js"></script>
```
### 注入模块名
```javascript 
var app = angular.module('demo',['ui.router']);
```
###  配置路由
```javascript
		app.config(function("$stateProvider",function($stateProvider){
			$stateProvider.state('index',{
				url:'/index',
				template:'<p>第一页</p>'
			}).state('index',{
				url:'/index',
				template:'<p>第二页</p>'
			}).state('index',{
				url:'/index',
				template:'<p>第三页</p>'
			})
		}))
```
### ui-view
```ui-view```