// function handlePreloader() {
//     if ($('.preloader').length) {
//         $('.preloader').delay(200).fadeOut(500);
//     }
// }



export function handlePreloader() {

    const preloader = document.querySelector('.preloader');
    const preloaderFadeOut = (el, timeout) => {
        el.style.opacity = 1;
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.display = 'none';
        }, timeout);
    };
    
    if (preloader) {
        preloaderFadeOut(preloader, 500);
        console.log("preloader отработал");
    }

}