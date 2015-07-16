var gulp   = require('gulp')
  , mocha  = require('gulp-mocha')
  , eslint = require('gulp-eslint');

gulp.task('default', ['watch']);


gulp.task('test',  function(){
  return gulp.src('test/*.js')
    .pipe(mocha());
});


/**
 * Watch lib & test files an on change
 * lint, build and run mocha
 */
gulp.task('watch', function() {
  var tasks = ['lint', 'test'];

  gulp.start(tasks);
  gulp.watch(['lib/**', 'test/**'], tasks);
});


gulp.task('lint', function () {
  return gulp.src(['lib/**/*.js', 'test/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});
