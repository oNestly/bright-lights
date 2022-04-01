import gulpWebp from "gulp-webp";

const webp = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'WEBP',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(gulpWebp())
		.pipe(app.plugins.debug({
			"title": "WebP: "
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};

export { webp };