###服务
`$scope`是控制器独有的服务，$scope是控制器的作用域，也就是用来绑定数据模型的一个服务

## $http
`$http`

数据流动方向
```
	font-end v->c(ng-model/ng-bind/{{}})->m--$http-->back-end
	back-end--$http-->m->c((ng-model/ng-bind/{{}}))-> v
```
用下面这个
```javascript
					$http({
						url: 'get.php',
						method: 'GET', //get post jsonp,
						params: {
							input: $scope.input,
							skill: $scope.skill
						}
					}).then(function(data) {
						console.log(data)
						$scope.name = data.data
					});
```
这个是旧版本方法
```javascript
					http.post("post.php", {
						params: {
							input: $scope.input,
							skill: $scope.skill
						}
					}).success(function(data) {
						console.log(data)
					})
```

>Jsonp 跨域，它本质就是动态创建`script`标签,然后利用src这个属性值的跨域能力，实现数据请求

**注意**POST请求跟jQ是不一样的，jQ是返回字符串，ng返回对象，引入一个ngPost来去改写

## $interval&&$timeout
跟原生的window.setTimeout是有区别的，因为原生是无法监听$scope,所以如果用原生的方法去改变$scope，angular是监听不到的

## $location
```javascript
url = http://qiaole.sinaapp.com?#name=cccccc  
$location.absUrl();  
// http://qiaole.sinaapp.com?#name=cccccc  
$location.host();  
// qiaole.sinaapp.com  
$location.port();  
// 80  
$location.protocol();  
// http  
$location.url();  
// ?#name=cccccc
  // 获取url参数  
$location.search().name;  
// or  
$location.search()['name']; 
``` 

## $rootScope
是ng-app的作用域范围，它可以用在两个控制器之间传递数据，你可以把它看做ng的全局作用域

# 自定义服务
## service
**可以是一个构造函数，也可以返回一个对象**
服务一般就是自定义一个封装好的对象方法，然后就可以注入到`controller,directive,filter,service`
```javascript
		app.service("服务名字",function(){
			//返回的是一个对象
			return {
				
			}
		})
```
一般工作用service就够了，因为它既可以是构造函数，也可以是返回对象

## factory
**返回的是一个对象**
```javascript
app.factory("服务名字", function() {
			return {
				name: "lan",
				age: 81
			}
		})
```

## 事件广播
$broadcast:向下(子)广播事件
```javascript
	$scope.$broadcast('事件名字', '传递的值');
```

$emit:向上(父)广播事件
```javascript
	$scope.$emit('事件名字', '传递的值');
```

$on:接受广播事件
```javascript
			$scope.$on('事件名字', function(event, data) {
				//data 就是传递过来的值
			})
```