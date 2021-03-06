"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourceMaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
// console.log(bs);
// console.log(process.argv);

var scriptGlob = ["./*.js", "!./node_moudules", "!./.gulpfile.js"];
var scssPath = './css_src/*.scss';

gulp.task('test', function () {

	gulp.watch(scssPath, ['lil']);
});

gulp.task('lil', function (a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
});

gulp.task('kek', function () {
	bs.init({
		// server:true
	});

	gulp.watch(scssPath, ['sass_bs']);
});

gulp.task('sass_bs', function () {
	//noinspection JSUnresolvedFunction
	return gulp.src(scssPath).pipe(sourceMaps.init()).pipe(sass()).pipe(sourceMaps.write()).pipe(gulp.dest('./css_build')).pipe(bs.stream());
});

gulp.task('prefix', function () {
	return gulp.src(cssPath).pipe(autoprefixer({
		browsers: ['>0.5%'],
		cascade: true
	})).pipe(gulp.dest('./css_build'));
});

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task("watch", function () {
	gulp.watch("./*.js", ["babel"]);
});

gulp.task("babel", function () {
	return gulp.src(scriptGlob).pipe(newer('dist')).pipe(sourceMaps.init()).pipe(babel()).on("error", handleError).pipe(sourceMaps.write()).pipe(gulp.dest("dist"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHBmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxPQUFPLFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSSxRQUFRLFFBQVEsWUFBUixDQUFaO0FBQ0EsSUFBSSxhQUFhLFFBQVEsaUJBQVIsQ0FBakI7QUFDQSxJQUFJLFFBQVEsUUFBUSxZQUFSLENBQVo7QUFDQSxJQUFJLGVBQWUsUUFBUSxtQkFBUixDQUFuQjtBQUNBLElBQUksS0FBSyxRQUFRLGNBQVIsRUFBd0IsTUFBeEIsRUFBVDtBQUNBLElBQUksT0FBTyxRQUFRLFdBQVIsQ0FBWDs7OztBQUlBLElBQUksYUFBYSxDQUFDLFFBQUQsRUFBVyxrQkFBWCxFQUErQixpQkFBL0IsQ0FBakI7QUFDQSxJQUFJLFdBQVcsa0JBQWY7O0FBRUEsS0FBSyxJQUFMLENBQVUsTUFBVixFQUFpQixZQUFVOztBQUczQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUVDLENBTEQ7O0FBT0EsS0FBSyxJQUFMLENBQVUsS0FBVixFQUFnQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQzlCLFNBQVEsR0FBUixDQUFZLENBQVo7QUFDQSxTQUFRLEdBQVIsQ0FBWSxDQUFaO0FBQ0EsU0FBUSxHQUFSLENBQVksQ0FBWjtBQUNBLENBSkQ7O0FBTUEsS0FBSyxJQUFMLENBQVUsS0FBVixFQUFnQixZQUNoQjtBQUNDLElBQUcsSUFBSCxDQUFROztBQUFBLEVBQVI7O0FBSUEsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixDQUFDLFNBQUQsQ0FBcEI7QUFFQSxDQVJEOztBQVVBLEtBQUssSUFBTCxDQUFVLFNBQVYsRUFBb0IsWUFDcEI7O0FBRUMsUUFBTyxLQUFLLEdBQUwsQ0FBUyxRQUFULEVBQ04sSUFETSxDQUNELFdBQVcsSUFBWCxFQURDLEVBRU4sSUFGTSxDQUVELE1BRkMsRUFHTixJQUhNLENBR0QsV0FBVyxLQUFYLEVBSEMsRUFJTixJQUpNLENBSUQsS0FBSyxJQUFMLENBQVUsYUFBVixDQUpDLEVBS04sSUFMTSxDQUtELEdBQUcsTUFBSCxFQUxDLENBQVA7QUFNQSxDQVREOztBQWFBLEtBQUssSUFBTCxDQUFVLFFBQVYsRUFBbUIsWUFDbkI7QUFDQyxRQUFPLEtBQUssR0FBTCxDQUFTLE9BQVQsRUFDTixJQURNLENBQ0QsYUFBYTtBQUNsQixZQUFTLENBQUMsT0FBRCxDQURTO0FBRWxCLFdBQVE7QUFGVSxFQUFiLENBREMsRUFLTixJQUxNLENBS0QsS0FBSyxJQUFMLENBQVUsYUFBVixDQUxDLENBQVA7QUFNQSxDQVJEOztBQVlBLFNBQVMsV0FBVCxDQUFxQixHQUFyQixFQUNBO0FBQ0UsU0FBUSxHQUFSLENBQVksSUFBSSxRQUFKLEVBQVo7QUFDQSxNQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0Q7O0FBRUQsS0FBSyxJQUFMLENBQVUsT0FBVixFQUFrQixZQUNsQjtBQUNDLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFBb0IsQ0FBQyxPQUFELENBQXBCO0FBQ0EsQ0FIRDs7QUFLQSxLQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQ25CO0FBQ0UsUUFBTyxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQ0osSUFESSxDQUNDLE1BQU0sTUFBTixDQURELEVBRVAsSUFGTyxDQUVGLFdBQVcsSUFBWCxFQUZFLEVBR0osSUFISSxDQUdDLE9BSEQsRUFHVSxFQUhWLENBR2EsT0FIYixFQUdxQixXQUhyQixFQUlKLElBSkksQ0FJQyxXQUFXLEtBQVgsRUFKRCxFQUtKLElBTEksQ0FLQyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBTEQsQ0FBUDtBQU9ELENBVEQiLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ3VscCA9IHJlcXVpcmUoXCJndWxwXCIpO1xyXG52YXIgYmFiZWwgPSByZXF1aXJlKFwiZ3VscC1iYWJlbFwiKTtcclxudmFyIHNvdXJjZU1hcHMgPSByZXF1aXJlKCdndWxwLXNvdXJjZW1hcHMnKTtcclxudmFyIG5ld2VyID0gcmVxdWlyZSgnZ3VscC1uZXdlcicpO1xyXG52YXIgYXV0b3ByZWZpeGVyID0gcmVxdWlyZSgnZ3VscC1hdXRvcHJlZml4ZXInKTtcclxudmFyIGJzID0gcmVxdWlyZSgnYnJvd3Nlci1zeW5jJykuY3JlYXRlKCk7XHJcbnZhciBzYXNzID0gcmVxdWlyZSgnZ3VscC1zYXNzJyk7XHJcbi8vIGNvbnNvbGUubG9nKGJzKTtcclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5hcmd2KTtcclxuXHJcbnZhciBzY3JpcHRHbG9iID0gW1wiLi8qLmpzXCIsIFwiIS4vbm9kZV9tb3VkdWxlc1wiLCBcIiEuLy5ndWxwZmlsZS5qc1wiIF07XHJcbnZhciBzY3NzUGF0aCA9ICcuL2Nzc19zcmMvKi5zY3NzJztcclxuXHJcbmd1bHAudGFzaygndGVzdCcsZnVuY3Rpb24oKXtcclxuXHJcblxyXG5ndWxwLndhdGNoKHNjc3NQYXRoLFsnbGlsJ10pO1xyXG5cdFxyXG59KTtcclxuXHJcbmd1bHAudGFzaygnbGlsJyxmdW5jdGlvbihhLGIsYyl7XHJcblx0Y29uc29sZS5sb2coYSk7XHJcblx0Y29uc29sZS5sb2coYik7XHJcblx0Y29uc29sZS5sb2coYyk7XHJcbn0pO1xyXG5cclxuZ3VscC50YXNrKCdrZWsnLGZ1bmN0aW9uKClcclxue1xyXG5cdGJzLmluaXQoe1xyXG5cdFx0Ly8gc2VydmVyOnRydWVcclxuXHR9KTtcclxuXHJcblx0Z3VscC53YXRjaChzY3NzUGF0aCxbJ3Nhc3NfYnMnXSk7XHJcblxyXG59KTtcclxuXHJcbmd1bHAudGFzaygnc2Fzc19icycsZnVuY3Rpb24oKVxyXG57XHJcblx0Ly9ub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkRnVuY3Rpb25cclxuXHRyZXR1cm4gZ3VscC5zcmMoc2Nzc1BhdGgpXHJcblx0LnBpcGUoc291cmNlTWFwcy5pbml0KCkpXHJcblx0LnBpcGUoc2FzcygpKVxyXG5cdC5waXBlKHNvdXJjZU1hcHMud3JpdGUoKSlcclxuXHQucGlwZShndWxwLmRlc3QoJy4vY3NzX2J1aWxkJykpXHJcblx0LnBpcGUoYnMuc3RyZWFtKCkpO1xyXG59KTtcclxuXHJcblxyXG5cclxuZ3VscC50YXNrKCdwcmVmaXgnLGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiBndWxwLnNyYyhjc3NQYXRoKVxyXG5cdC5waXBlKGF1dG9wcmVmaXhlcih7XHJcblx0XHRicm93c2VyczpbJz4wLjUlJ10sXHJcblx0XHRjYXNjYWRlOnRydWVcclxuXHR9KSlcclxuXHQucGlwZShndWxwLmRlc3QoJy4vY3NzX2J1aWxkJykpO1xyXG59KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSBcclxue1xyXG4gIGNvbnNvbGUubG9nKGVyci50b1N0cmluZygpKTtcclxuICB0aGlzLmVtaXQoJ2VuZCcpO1xyXG59XHJcblxyXG5ndWxwLnRhc2soXCJ3YXRjaFwiLGZ1bmN0aW9uKClcclxue1xyXG5cdGd1bHAud2F0Y2goXCIuLyouanNcIixbXCJiYWJlbFwiXSk7XHJcbn0pO1xyXG5cclxuZ3VscC50YXNrKFwiYmFiZWxcIiwgZnVuY3Rpb24gKCkgXHJcbntcclxuICByZXR1cm4gZ3VscC5zcmMoc2NyaXB0R2xvYilcclxuICAgIC5waXBlKG5ld2VyKCdkaXN0JykpXHJcblx0LnBpcGUoc291cmNlTWFwcy5pbml0KCkpXHJcbiAgICAucGlwZShiYWJlbCgpKS5vbihcImVycm9yXCIsaGFuZGxlRXJyb3IpXHJcbiAgICAucGlwZShzb3VyY2VNYXBzLndyaXRlKCkpXHJcbiAgICAucGlwZShndWxwLmRlc3QoXCJkaXN0XCIpKVxyXG5cclxufSk7XHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
