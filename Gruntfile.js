module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/project.css": "less/project.less"
                }
            }
        },
        watch: {
            less: {
                files: ['less/*.less', '*.html', 'js/*.js'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};