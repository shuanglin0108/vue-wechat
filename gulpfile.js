var gulp         = require('gulp'),
    less         = require('gulp-less'),
    minifycss    = require('gulp-minify-css'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    notify       = require('gulp-notify'),
    watch        = require('gulp-watch'),
    plumber 	 = require('gulp-plumber');
    path         = require('path'),
    changed 	 = require('gulp-changed'),
    fileinclude  = require('gulp-file-include'),
    connect      = require('gulp-connect'),
    livereload   = require('gulp-livereload'), // 网页自动刷新（文件变动后即时刷新页面）
    webserver 	 = require('gulp-webserver'); // 本地服务器


//html代码复用
gulp.task('fileinclude',function(){
    gulp.src('./src/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
})
// Build css
gulp.task('build-css', function () {
    gulp.src('./src/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'import') ]
        }))
        //正常编译成css
         .pipe(gulp.dest('./src'))
        //重命名
        //.pipe(rename({suffix: ".min"}))
        //压缩
        //.pipe(minifycss())
        //输出路径
        //.pipe(gulp.dest('./'))
    // .pipe(notify({ message: 'build-css task complete' }));
});

//gulp watch
gulp.task('watch',function(){
    gulp.watch(['src/**/*.less'], ['build-css']);
    gulp.watch(['src/**/*.js'], ['build-js']);
    gulp.watch(['src/**/*.html'], ['fileinclude']);

});


gulp.task('default',['watch']);
