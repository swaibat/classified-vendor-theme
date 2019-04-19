"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const gulp = require("gulp");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html(){
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('dist'))
}
// Watch files
function watchFiles() {
  gulp.watch("./**/*.html", browserSyncReload);
}

// Define complex tasks
const build = gulp.series(html, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.default = build;
