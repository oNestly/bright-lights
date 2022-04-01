import { projectName, isWhole, distFolder } from './settings.js';

export function getBuildFolder() {
	if (isWhole === true) {
		return `./${distFolder}/${projectName}`;
	} else {
		return `./${distFolder}`;
	}
}

export function getReplaceForHtml() {
	if (isWhole === true) {
		return `/${projectName}`;
	} else {
		return ``;
	}
}