import gulp from "gulp";
import gulpIf from "gulp-if";
import browserSync from "browser-sync";
import notify from "gulp-notify";
import plumber from "gulp-plumber";

import { path } from "./gulp/config/path.js";
import { app } from "./gulp/config/app.js";

global.$ = {
	gulp: gulp,
	path: path,
	gulpIf: gulpIf,
	browserSync: browserSync,
	notify: notify,
	app: app,
	plumber: plumber,
};

import { clear } from "./gulp/tasks/clear.js";
import { server } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { styles } from "./gulp/tasks/styles.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { fonts } from "./gulp/tasks/fonts.js";

const watcher = () => {
	$.gulp.watch($.path.watch.html, html);
	$.gulp.watch($.path.watch.styles, styles);
	$.gulp.watch($.path.watch.js, js);
	$.gulp.watch($.path.watch.img, img);
};

const build = $.gulp.series(
	clear,
	$.gulp.parallel(html, styles, js, img, fonts)
);
const dev = $.gulp.series(build, $.gulp.parallel(watcher, server));

export default $.app.isProd ? build : dev;
