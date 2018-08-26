let gulp = require('gulp');
let htmlmin = require("gulp-htmlmin");
let htmlclean = require("gulp-htmlclean");

function minifyHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true,
        }))
        .pipe(htmlclean())
        .pipe(gulp.dest('dist'))
}

exports.minifyHTML = minifyHTML;

gulp.task('build', gulp.series(minifyHTML));

gulp.task('default', gulp.series('build'));
