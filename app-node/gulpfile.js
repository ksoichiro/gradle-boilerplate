var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');
var coffee = require('gulp-coffee');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var gulp = require('gulp');
var del = require('del');

var paths = {
    less: {
        files: ['src/main/resources/stylesheets/*.less'],
        root: 'src/main/resources/stylesheets'
    },
    coffee: {
        files: ['src/main/resources/javascripts/*.coffee'],
        root: 'src/main/resources/javascripts'
    },
    dest: './src/main/resources/static/'
};

gulp.task('less', function() {
    return gulp.src(paths.less.files)
        .pipe(less())
        .pipe(cssmin({root: paths.less.root}))
        .pipe(gulpFilter(['application.css']))
        .pipe(gulp.dest(paths.dest + 'css'));
});

gulp.task('coffee', function() {
    gulp.src(paths.coffee.files)
        .pipe(coffee())
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest + 'js'));
});

gulp.task('bower-files', function() {
    gulp.src(mainBowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest(paths.dest + 'lib'));
});

gulp.task('watch', function() {
    gulp.watch(paths.less.files, ['less']);
    gulp.watch(paths.coffee.files, ['coffee']);
});

gulp.task('clean', function(cb) {
    del([paths.dest + 'lib', paths.dest + 'js', paths.dest + 'css'], cb);
});

gulp.task('build', ['less', 'coffee', 'bower-files'], function() {
});
