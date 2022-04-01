import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from "gulp-sourcemaps";
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов
import purgecss from 'gulp-purgecss';

const sass = gulpSass(dartSass);

const scss = () => {
	return app.gulp.src(app.path.src.scss)
		// * Отлавливает ошибки
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError(
				{
					title: 'SCSS',
					message: 'Error: <%= error.message %>'
				}
			)
		))

		// * Если Dev, то генерирует sourcemap на основе всех scss
		.pipe(app.plugins.if(
			app.isDev,
			sourcemaps.init()
		))

		// * Создаёт один единый scss файл на основе всех вложенных
		.pipe(sass(
			{
				outputStyle: 'expanded'
			}
		).on(
			'error',
			sass.logError
		))

		// * Если Build версия, то группирует медиа запросы
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))

		// ! ОТКЛ, даёт возмность исользовать WebP в CSS файлах
		// .pipe(webpcss({
		// 	webpClass: '.webp',
		// 	noWebpClass: '.no-webp'
		// }))
		
		// * Добавляет вендорные префиксы для доступа во всех браузерах
		.pipe(autoPrefixer(
			{
				grid: true,
				overrideBrowserslist: ['last 3 versions'],
				cascade: false
			}
		))
		// * Если Build, то удаляет лишние неиспользуемые классы
		.pipe(app.plugins.if(
				app.isBuild,
				purgecss(
					{
						content: ['src/**/*.html','src/**/*.php','src/**/*.js',]
					}
				)
			))

		// * Если Buld, то минифицирует css файл
		.pipe(app.plugins.if(
				app.isBuild,
				cleanCss()
			))

		// * Если Build, то добавляет суффикс к имени файла, чтобы указать на минифицированную версию
		.pipe(app.plugins.if(
			app.isBuild,
			app.plugins.rename(
				{
					suffix: ".min"
				}
			)
		))

		// * Если Dev, то 
		.pipe(app.plugins.if(
			app.isDev,
			sourcemaps.write(
				"./maps/"
			)
		))

		// * Помещает готовый файл в папку
		.pipe(app.gulp.dest(
			app.path.build.css
		))

		// * Запускает слежку BrowserSync'ом
		.pipe(app.plugins.browserSync.stream());
	};
	
	export {scss};