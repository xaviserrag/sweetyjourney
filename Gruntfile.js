// Generated on 2014-03-28 using generator-phaser-official 0.0.8-rc-2
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            build: ['build']
        },
        copy: {
            dist: {
                files: [
                    // includes files within path and its sub-directories
                    {expand: true, cwd: 'src', src: ['assets/**', '!assets/styles/**'], dest: 'build'},
                    {expand: true, flatten: true, src: ['src/assets/styles/*.css'], dest: 'build/css'},
                    {expand: true, cwd: 'src', src: ['plugins/**'], dest: 'build/js'},
                    {expand: true, cwd: 'src', src: ['index.html'], dest: 'build'},
                    {expand: true, flatten: true, src: ['node_modules/phaser/build/phaser.min.js'], dest: 'build/js'}
                ]
            }
        },
        browserify: {
            build: {
                src: ['src/game/main.js'],
                dest: 'build/js/game.js'
            }
        },
        less:{
          development: {
              options: {
                  compress: false,
                  yuicompress: true,
                  optimization: 2
              },
              files: {
                  'build/css/game.min.css' : 'src/assets/styles/less/game.less'
              }
          }
        },
        watch: {
            source: {
                files: ["./src/assets/styles/less/*.less", "./src/**/*.js"],
                tasks: ['build'],
                options: {
                    livereload: true
                }

            }
        },
        connect: {
            options: {
                port: 8080,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'build/')
                        ];
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('build', ['clean:build', 'less', 'browserify', 'copy']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);
    grunt.registerTask('prod', ['build', 'copy']);
};
