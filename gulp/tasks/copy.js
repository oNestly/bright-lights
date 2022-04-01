const copy = () => {
	return app.gulp.src(app.path.src.other)
		.pipe(app.gulp.dest(app.path.build.other));
};

export {copy};