## 封装swiper的组件
[下载Swiper完整安装包](https://pan.baidu.com/s/1kVBLmmF)
1. 把插件的html和css部分放在，templateUrl模板里面(视图)
2. 把插件的js部分放在link函数里面(逻辑)

## filter
过滤器可以通过一个管道字符（|）和一个过滤器添加到表达式中
```javascript
{{num|过滤器的名字:参数}}
```

|filter|methods|
|-|-|
|currency|currency:"货币符号"|
|uppercase|uppercase大写|
|lowercase|lowercase小写|
|filter|接受一个对象，一般配合ng-repeat|
|orderBy|接受两个参数，第一个是要排序的键值，第二个是个布尔值|
|limitTo|可以用于分页,第一个参数就是截取的长度，第二个是截取的位置，可以用于截取字符串和数组|
|json|就是把对象转为字符串显示，一般用于调试页面数据|
|date|接受时间戳格式，处理成常用的时间格式|
|number|精确到就是小数点后几位|

## 自定义过滤器
```javascript
app.filter("过滤器名字",function("服务")){
	return function("传入需要处理的值"){
		return "返回处理完的值"
	}
}
```

## $fiter服务
这个服务可以注入到过滤器或者控制器里面
```javascript
$filter("过滤器名字")("处理的数据","过滤器的参数")
```

## $sce服务
处理html为安全字符的一个服务
```javascript
JS:
$scope.html = $sce.trustAsHtml("html结构")
HTML:
ng-bind-html = "html"
```