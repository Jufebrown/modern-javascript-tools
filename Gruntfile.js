module.exports = (grunt) => {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        },
      },
    },
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass'],
      },
    },
  });

//try these: uglify, concat (js), jshint

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
