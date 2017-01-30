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
        }
      },
    },
  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
