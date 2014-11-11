module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/project.css": "less/project.less"
                }
            }
        },
        watch: {
            dev: {
                files: ['less/*.less', '*.html', 'js/*.js'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    livereload: true
                }
            }
        },
        autoprefixer: {
            dev: {
                src: 'css/project.css',
                dest: 'css/project.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);
};