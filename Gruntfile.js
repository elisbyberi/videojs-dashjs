module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      default_options: {}
    },
    watch: {
      files: ['**/*'],
      tasks: ['jshint'],
    },
    jshint: {
      all: ['./src/videojs-dashjs-controller.js']
    },
    concat: {
      dist: {
        src: ['./src/videojs-dashjs-controller.js', './src/dash.all.js'],
        dest: 'dist/videojs-dashjs.js'
      }
    },
    uglify : {
      all : {
        files: {
          'dist/videojs-dashjs.min.js' : [
            'dist/videojs-dashjs.js'
          ]
        }
      }
    }
  });

  // Require needed grunt-modules
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Define tasks
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
