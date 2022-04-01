import fileinclude from "gulp-file-include";
import gulpHtmlImgWrapper from 'gulp-html-img-wrapper';
import versionNumber from 'gulp-version-number';

const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'HTML',
				message: 'Error: <%= error.message %>'
			})
		))

		.pipe(fileinclude({
			prefix: `@@`,
			basepath: `./src/`,
		}
		))

		.pipe(gulpHtmlImgWrapper({
			classMove: false, // change for true to move class attribute from img tag to picture tag
			extensions: ['.jpg', '.png', '.jpeg'], // write your own extensions pack (case insensitive)
				/*
				*	ghiw-exclude атрибут помогает исключить обёртку и .webp
				*/
		}))
		
		.pipe(app.plugins.if(app.isBuild, versionNumber({
			'value': '%TS%',
			'append': {
				'key': 'v',
				'cover': 0,
				'to': [
					'css',
					'js',
				],
			},
			'output': {
				'file': 'gulp/version.json'
			},
		})))
		.pipe(app.plugins.if(app.isBuild, app.plugins.replace(".css", ".min.css")))
		.pipe(app.plugins.if(app.isBuild, app.plugins.replace(".js", ".min.js")))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
};

export {html};