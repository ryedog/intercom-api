var gulp    = require('gulp')
  , cache = require('gulp-cached')
  , babel   = require('gulp-babel')
  , mocha   = require('gulp-mocha')
  , eslint  = require('gulp-eslint')
  , babelr  = require('babel/register');


var watch_glob;
var all_glob = ['lib/**/*.js', 'test/**/*.js'];

function glob() {
  return watch_glob || all_glob
}

gulp.task('default', ['watch']);


/**
 * Watch lib & test files an on change
 * lint, build and run mocha
 */
gulp.task('watch', function() {
  // Do the tasks so it will cache them
  // this way when you actually change something
  // it only lints/tests what you changed
  // gulp.start(['lint', 'test']);

  gulp.watch(all_glob, function(event) {
    watch_glob = event.path;
    gulp.start(['lint', 'test']);
  });
});


gulp.task('test',  function(){
  return gulp.src(glob())
    //.pipe(cache('test'))
    .pipe(mocha({
      compilers: { js: babelr }
    }));
});


gulp.task('lint', function (param) {
  return gulp.src(glob())
    //.pipe(cache('linting'))
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
