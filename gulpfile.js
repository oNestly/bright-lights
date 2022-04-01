import gulp from 'gulp'; // Основной модуль
import { path } from './gulp/config/settings.js'; // Импорт путей
import { plugins } from './gulp/config/plugins.js'; // Импорт общих плагинов

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  isDevBuild: process.argv.includes('--devbuild'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { webp } from './gulp/tasks/webp.js';
import { svgSprite } from './gulp/tasks/svg.js';
import { favico } from './gulp/tasks/favico.js';
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { copy } from './gulp/tasks/copy.js';
// import { zip } from './gulp/tasks/zip.js';
// import { ftp } from './gulp/tasks/ftp.js';
import { server } from './gulp/tasks/server.js';

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.images, images, webp);
  gulp.watch(path.watch.svg, svgSprite);
  gulp.watch(path.watch.fav, favico);
  gulp.watch(path.watch.fonts, fonts);
  gulp.watch(path.watch.files, copy);
}

// Последовательная обработка шрифтов
// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, scripts, images, webp, svgSprite, favico));

// Построение сценариев выполнения задач
// ! const deployZIP = gulp.series(reset, mainTasks, zip);
// ! const deployFTP = gulp.series(reset, mainTasks, ftp);


const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));
const devBuild = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Экспорт сценариев
export { dev };
export { devBuild };
export { build };
// ! export { deployZIP };
// ! export { deployFTP };

// Выполнение сценария по умолчанию
if (app.isDev) {
	gulp.task('default', dev);
} 
if (app.isDevBuild) {
	gulp.task('default', devBuild);
}
if (app.isBuild) {
	gulp.task('default', build);
}
