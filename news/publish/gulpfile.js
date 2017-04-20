//gulp核心文件
var gulp = require("gulp");
//gulp压缩js的模块
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("minify", function() {
	//导入
	return gulp.src(['js/base/base.js', 'js/controller/*.js', 'js/directives/*.js', 'js/filter/*.js', 'js/router/*.js', 'js/services/*.js', 'js/base/bootstrap.js'])
		//合并
		.pipe(concat("main.js"))
		//压缩
		.pipe(uglify())
		//导出
		.pipe(gulp.dest('dist/js'))
})
//监听js的改变
gulp.watch("js/*/*.js", ["minify"])
gulp.task("default", ["minify"])