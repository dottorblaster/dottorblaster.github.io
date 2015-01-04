module.exports = function(grunt) {
	grunt.initConfig({
		jekyll: {
			options: {
				dest: '_site',
			},

			build: {
				options: {
					drafts: false,
					serve: false,
					watch: false
				}
			},

			dev: {
				options: {
					dest: '_devtarget',
					serve: true,
					drafts: true,
					port: 8000
				}
			},

			doctor: {
				options: {
					doctor: true
				}
			},

			prod: {
				options: {
					dest: '_prod',
					drafts: false,
					serve: true,
					watch: true,
					port: 4000
				}
			}
		},

		csslint: {
			build: {
				src: ['public/css/*.css']
			}
		},

		watch: { // this needs testing
			files: ['_layouts/*.html',
					'_posts/*',
					'public/css/*.css',
					'feed/*.xml',
					'_config.yml',
					'index.html',
					'404.html'],
			tasks: 'jekyll:dev',
			options: {
				spawn: true,
				iterrupt: true,
				atBegin: true,
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['csslint', 'jekyll:build']);
	grunt.registerTask('production', ['csslint', 'jekyll:prod']);
	grunt.registerTask('doctor', ['jekyll:doctor']);
};
