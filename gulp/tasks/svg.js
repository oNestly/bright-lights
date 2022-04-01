import sprite from 'gulp-svg-sprite';

const svgSprite = () => {
	return app.gulp.src(app.path.src.svg)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVGSPRITE',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(sprite({
			mode: {
				symbol: {
					dest : './',
					sprite: 'sprite.svg'
				}
			},
			shape: {
				dimension: {
					maxWidth: 500,
					maxHeight: 500
				},
				spacing: {
					padding: 0
				},
				id: {
					separator: '',
					generator: 'svg-'
				},
				transform: [{
					"svgo": {
						"plugins": [
							{ removeXMLNS: true },
							{ convertPathData: false },
							{ removeViewBox: false },
						]
					}
				}]
			},
			svg: {
				rootAttributes: {
					style: 'display: none;',
					'aria-hidden': true
				},
				xmlDeclaration: false
			}
		}))
		.pipe(app.plugins.debug({
			"title": "SVG Sprite: "
		}))
		.pipe(app.gulp.dest(app.path.build.svg));
};

export {
	svgSprite
};