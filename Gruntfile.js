module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		fontoptim: {
			empty: {
				src: 'noooo',
				dest: 'test/tmp/empty/ptserif',
				options: {
					fontFamily: 'PT Serif'
				}
			},
			basic: {
				src: 'test/fonts/PTSerif-*',
				dest: 'test/tmp/basic/ptserif',
				options: {
					fontFamily: 'PT Serif'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['tasks/**/*.js']
		},
		jscs: {
			all: ['tasks/**/*.js']
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					require: 'coffee-script/register'
				},
				src: ['test/*.coffee']
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('default', ['jshint', 'jscs', 'clean', 'fontoptim', 'test', 'clean']);
	grunt.registerTask('build', ['default']);
};
