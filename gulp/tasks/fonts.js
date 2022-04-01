import fs from 'fs';
import fonter from 'gulp-fonter';

const otfToTtf = () => {
	return app.gulp.src(app.path.src.otf)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'OTFTOTTF',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(app.gulp.dest(app.path.src.ttf));
};

const ttfToWoff = () => {
	return app.gulp.src(app.path.src.ttf)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'WOFF',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(app.gulp.dest(app.path.build.fonts));
};

const fontStyle = () => {
	const fontsFile = `${app.path.srcFolder}/scss/_local-fonts.scss`;
	fs.writeFile(fontsFile, '', () => {});
	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;

						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}

						fs.appendFile(fontsFile,
`@font-face {
	font-family: '${fontName}';
	font-display: swap;
	src: url("../fonts/${fontFileName}.woff") format("woff");
	font-weight: ${fontWeight};
	font-style: normal;
}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			}
		}
	);

	return app.gulp.src(`${app.path.srcFolder}`);

	function cb() {}
};


export {
	otfToTtf,
	ttfToWoff,
	fontStyle
};