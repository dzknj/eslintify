const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

var angularFiles = ['app/**/*.html', 'app/**/*.css'];
var serverFiles = ['gulpfile.js', 'server.js'];

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src(angularFiles)
  .pipe(gulp.dest('./build'));
});

gulp.task('lint:client', () => {
  gulp.src('app/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('lint:server', () => {
  gulp.src(serverFiles)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint:client', 'lint:server']);

gulp.task('build:dev', ['webpack:dev', 'static:dev']);

gulp.task('default', ['lint', 'build:dev']);
