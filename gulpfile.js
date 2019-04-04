const gulp = require('gulp')
const concat = require('gulp-concat')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  const plugins = [cssnano()]
    return gulp.src([
      'src/css/styles.css'
    ])
    .pipe(concat('index.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('server/static/css/'));
})

gulp.task('js', () => {
    return gulp.src([
      'src/js/localStorage.js',
      'src/js/swCheck.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('server/static/js/'));
})
