import imagemin from "gulp-imagemin";

const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>'
			})
		))  // Показывает лог ошибок
		.pipe(app.plugins.newer(app.path.build.images)) // Перезаписывает только изменённые файлы
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 4 // 0 to 7
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};

export {images};