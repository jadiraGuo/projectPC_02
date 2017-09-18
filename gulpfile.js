

var gulp = require("gulp");//加载gulp

var babel = require("gulp-babel"); //编译ES6

var sass = require("gulp-ruby-sass"); //编译scss

var uglify = require("gulp-uglify"); //压缩JS

var connect = require("gulp-connect");  //即时刷新


gulp.task("refresh", function(){
	gulp.src("./*.html").pipe(connect.reload());
});

gulp.task("js", function(){
	gulp.src("./js/*.js")
		.pipe( babel({
			presets : ["es2015"]
		}) )
		.pipe( gulp.dest("./minjs/") );
})

gulp.task("compilesass", function(){
	sass("./scss/*.scss", {
		style : "expanded"
	}).pipe( gulp.dest("./css/") );
})

gulp.task("listening", function(){
	connect.server({
		livereload:true
	});
	
	gulp.watch("./css/*.css", ["refresh"]);
	gulp.watch("./scss/*.scss", ["compilesass"]);
	gulp.watch("./js/*.js", ["js"]);
})


