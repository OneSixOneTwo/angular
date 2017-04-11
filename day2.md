## 引入JS的地方
如果把`script`放在`body`前面，那么就会先加载JS，因为一般JS比较大，所以阻塞这个HTML结构的渲染
反之，为了用户体验，就先加载HTML结构，再加载JS

一般我们也会把`link`放在`body`前面，因为CSS一般比较小，并且我们要渲染页面就先需要样式，不然排版就会混乱

## 指令
angular框架自带的一套属性值，往这个属性值放制定值就呈现不同逻辑
```javascript
	ng-XX=""
	ng-app
	ng-controller
	ng-click = "function"
	ng-bind = "name" ==> {{name}}
	ng-model = "" //此指令一般配合input select textarea标签使用
	ng-repeat = "array" "单项(名字乱来) in 数组" 一般配合ul select table标签使用
	ng-show = "bool""接受一个布尔值" 如果为真则显示，反之则隐藏
	ng-if = "bool" ng-if直接把DOM节点删除，或者插入DOM节点，ng-if比ng-show效率高一点
	ng-class = "object" ng-class接受的对象，对象名就是这个类名，属性值就是布尔值，如果右边的布尔值为真，那左边的类就出现，反之就隐藏
	ng-src="{{路径}}"
	ng-href="{{路劲}}"
	ng-switch="变量"配合ng-switch-when=""
```

1. 你如果用`ng-bind`，那就可以把JS放在`body`下面(老姚严谨用这种)
2. 如果用`{{}}`，那最好把JS放在`body`上面(老谢喜欢偷懒用这种)

## MVC MVVM

如图所示：

![qq 20170411101325](https://cloud.githubusercontent.com/assets/17243165/24891626/b45e2044-1ea9-11e7-86a5-99cc64ec8f66.png)

**M**:model模型也就是存取着数据(数据来自于后台ajax&jsonp$表单提交);

**C**:controller控制器就是一个媒介，也就是连接着数据跟视图的一直无形手;

**V**:view视图，视图其实就是DOM层先结构，也可以理解为页面呈现的状态;
```javascript
	M($scope绑定的值)--C-->V(ng-bind or {{}})
	V(ng-model)--C-->M($scope绑定的值)
```
**jQ**是基于节点驱动的:`$().val,$().text`

**ng**是基于数据驱动的:`ng-model,{{}}/ng-bind`
