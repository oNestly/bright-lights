// Получаем имя папки проекта

import * as help from './helpful.js';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());



const projectName = `createx`;
const isWhole = false;
const srcFolder = `./src`;
const distFolder = `./dist`;
const buildFolder = help.getBuildFolder();
const replaceForHtml = help.getReplaceForHtml();

export const path = {
	src: {
		html: [
			`${srcFolder}/views/**/*.{html,php}`,
			`!${srcFolder}/views/@source/**/*.{html,php}`,
		],
		scss: `${srcFolder}/scss/app.scss`,
		js: `${srcFolder}/js/app.js`,
		images: [
			`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
			`!${srcFolder}/img/fav/favicon.{jpg,jpeg,png,gif}`,
		],
		svg: `${srcFolder}/img/**/*.svg`,
		fav: `${srcFolder}/img/fav/favicon.{jpg,jpeg,png,gif}`,
		otf: `${srcFolder}/fonts/otf/*.otf`,
		ttf: `${srcFolder}/fonts/ttf/*.ttf`,
		other: `${srcFolder}/other/**/*.*`,
	},
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		svg: `${buildFolder}/img/`,
		fav: `${buildFolder}/img/fav/`,
		otf: `${buildFolder}/fonts/otf/`,
		ttf: `${buildFolder}/fonts/ttf/`,
		fonts: `${buildFolder}/fonts/`,
		other: `${buildFolder}/`,
	},
	watch: {
		html: [
			`${srcFolder}/blocks/**/*.{html,php}`,
			`${srcFolder}/views/**/*.*`,
		],
		scss: `${srcFolder}/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico,svg}`,
		svg: `${srcFolder}/img/svg/**/*.svg`,
		fav: `${srcFolder}/img/fav/favicon.{jpg,jpeg,png,gif}`,
		fonts: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
		files: `${srcFolder}/files/**/*.*`,
	},
	projectName: `${projectName}`,
	replaceForHtml: `${replaceForHtml}`,
	isWhole: isWhole,
	bemDefault: `${srcFolder}/blocks/modules/`,
	clean: distFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	distFolder: distFolder,
	ftp: `test`,
	rootFolder: rootFolder,
	projectRootFolder: `./dist`,
};

export { projectName ,isWhole, distFolder };
