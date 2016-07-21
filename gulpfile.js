var gulp = require("gulp");
var babel = require("gulp-babel");
var sourceMaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
// console.log(bs);
// console.log(process.argv);

var scriptGlob = ["./*.js", "!./node_moudules", "!./.gulpfile.js" ];
var scssPath = './css_src/*.scss';

gulp.task('test',function(){


gulp.watch(scssPath,['lil']);
	
});

gulp.task('lil',function(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
});

gulp.task('kek',function()
{
	bs.init({
		// server:true
	});

	gulp.watch(scssPath,['sass_bs']);

});

gulp.task('sass_bs',function()
{
	//noinspection JSUnresolvedFunction
	return gulp.src(scssPath)
	.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./css_build'))
	.pipe(bs.stream());
});



gulp.task('prefix',function()
{
	return gulp.src(cssPath)
	.pipe(autoprefixer({
		browsers:['>0.5%'],
		cascade:true
	}))
	.pipe(gulp.dest('./css_build'));
});



function handleError(err) 
{
  console.log(err.toString());
  this.emit('end');
}

gulp.task("watch",function()
{
	gulp.watch("./*.js",["babel"]);
});

gulp.task("babel", function () 
{
  return gulp.src(scriptGlob)
    .pipe(newer('dist'))
	.pipe(sourceMaps.init())
    .pipe(babel()).on("error",handleError)
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("dist"))

});

 