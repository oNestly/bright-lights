import * as flsFunctions from './modules/functions.js';
import { handlePreloader } from './modules/preloader.js';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
flsFunctions.fullVHfix();


document.addEventListener('DOMContentLoaded', function(){

    window.onload = handlePreloader();

});