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
					watch: true,
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
		}
	});

	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('default', ['jekyll:build']);
	grunt.registerTask('watch', ['jekyll:dev']);
	grunt.registerTask('production', ['jekyll:prod']);
	grunt.registerTask('doctor', ['jekyll:doctor']);
};
