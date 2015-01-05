var gulp = require('gulp'),
    karma = require('karma').server,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    yuidoc = require('gulp-yuidoc'),
    sourceFiles = [
      'src/angularFinance/angularFinance.prefix',
      'src/angularFinance/angularFinance.js',
      'src/angularFinance/directives/**/*.js',
      'src/angularFinance/filters/**/*.js',
      'src/angularFinance/services/**/*.js',
      'src/angularFinance/angularFinance.suffix'
    ];

	require('gulp-release-tasks')(gulp);

gulp.task('build', function() {
  gulp.src(sourceFiles)
    .pipe(concat('angular-finance.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('angular-finance.min.js'))
    .pipe(gulp.dest('./dist'))
});

var option = {
   project: {
    "name": "angular-finance",
    "description": "Test",
    "version": "0.0.1"
   }
 };
gulp.task('doc', function() {
  gulp.src(sourceFiles)
	.pipe(yuidoc(option))
    .pipe(gulp.dest("./doc"))
});

/**
 * Run test once and exit
 */
gulp.task('test-src', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['test-src', 'build']);