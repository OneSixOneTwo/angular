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

