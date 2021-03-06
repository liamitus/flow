module.exports = function (grunt) {
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['dest'],

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.html', 'templates/**', 'fonts/*', 'images/**'],
                        dest: 'dest/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'src/',
                        src: ['js/lib/*', 'css/*'],
                        dest: 'dest/'
                    },
                    {
                        src: ['.htaccess'],
                        dest: 'dest/'
                    }
                ]
            },
        },

        concat: {
            main: {
                files: {
                    'dest/main.js': [
                        'src/js/polyfills/*.js',
                        'src/js/keycodes.js',
                        'src/js/utils.js',
                        'src/js/settings.js',
                        'src/js/input.js',
                        'src/js/output.js',
                        'src/js/*.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: true,
                banner: '/*! (c) <%= pkg.author %> - ' +
                    '<%= grunt.template.today("mm-dd-yyyy") %> */\n'
            },
            main: {
                files: {
                    'dest/main.js': ['src/js/*.js']
                }
            }
        },

        connect: {
            main: {
                options: {
                    base: 'dest',
                    port: 3000,
                    hostname: '*',
                    livereload: true,
                }
            }
        },
        
        watch: {
            src: {
                tasks: ['clean', 'copy', 'concat'],
                files: [
                    'src/**/*.js',
                    'src/**/*.css',
                    'src/**/*.html'
                ],
                options: {
                    livereload: true
                }
            }
        }
    
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['clean', 'copy', 'concat', 'connect', 'watch']);
    grunt.registerTask('dev', ['clean', 'copy', 'concat']);
    grunt.registerTask('deploy', ['clean', 'copy', 'uglify']);

};
