import gfavicon from "gulp-favicons";

const favico = () => {
    return app.gulp.src(app.path.src.fav)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'FAVICO',
            message: 'Error: <%= error.message %>'
        })
    ))
	.pipe(gfavicon({
		path: 'fav/',
		icons: {
			appleIcon: true,
			favicons: true,
			online: false,
			appleStartup: false,
			android: false,
			firefox: false,
			yandex: false,
			windows: false,
			coast: false,
			
		},
		start_url: '@@file/',
	}))
    .pipe(app.gulp.dest(app.path.build.fav));
};

export {favico};