const devServer = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.distFolder}`,
		},
		startPath: `/${app.path.projectName}`,
		notify: false,
		port: 3000,
	});
};

const server = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.distFolder}`,
		},
		startPath: `/${app.path.replaceForHtml}`,
		notify: false,
		port: 3000,
	});
};

export { server };