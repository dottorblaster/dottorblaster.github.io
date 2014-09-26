module.exports = function(grunt) {
	grunt.initConfig({
		jekyll: {
			options: {
				dest: '_site',
			},
			dev: {
				options: {
					dest: '_devtarget',
					serve: true,
					watch: true,
					drafts: true,
					limit_posts: 100,
					port: 8000
				}
			},
			build: {
				drafts: false,
				serve: false,
				watch: false,
				drafts: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('default', ['jekyll:build']);
	grunt.registerTask('watch', ['jekyll:dev']); // I should include jslint
};