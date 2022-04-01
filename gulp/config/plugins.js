import notify from 'gulp-notify'; // Сообщения (подсказки)
import ifPlugin from 'gulp-if'; // Условное ветление
import prettier from "gulp-prettier";
import newer from 'gulp-newer'; // Проверка обновления
import plumber from 'gulp-plumber'; // Обработка ошибок
import rename from 'gulp-rename'; // Переименовывает файлы

import replace from 'gulp-replace'; // Поиск и замена
import browserSync from 'browser-sync'; // Локальный сервер
import debug from "gulp-debug"; // Определяет действие в консоли

export const plugins = {
  notify,
  if: ifPlugin,
  prettier,
  newer,
  plumber,
  rename,

  replace,
  browserSync,
  debug,
};


/* 

Мы можем выполнять определённые действия при выполнении условия,
Как в данном примере: При аргументе "--build", который прописан в конфиге,
Мы запускаем этот pipe

.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))

*/