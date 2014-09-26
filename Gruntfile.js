grunt.initConfig({
	jekyll: {
		build: {
			dest: 'build',
			drafts: 'false'
		},

		checkup: {
			doctor: true
		}

		dev: {
			serve: true,
			watch: true,
			drafts: true,
			limit_posts: 100,
			port: 8000
		}
	}

	watch: {
		jekyll: {
			tasks: ['jekyll:dev']
		}
	}

	doctor: {
		jekyll: {
			tasks: ['jekyll:checkup']
		}
	}
});

grunt.loadNpmTasks('grunt-jekyll');

grunt.registerTask('default', ['jshint', 'jekyll:build']);
