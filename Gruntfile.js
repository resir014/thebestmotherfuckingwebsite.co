module.exports = function(grunt) {

  // Load all tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Optimise/minify images
    imagemin: {
      publish: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img'
        }]
      },
    },

    // Builds Jekyll website to `_site` directory
    jekyll: {
      options: {
        bundleExec: true
      },
      serve: {
        options: {
          drafts: true,
          serve: true
        }
      },
      publish: {
        options: {
          drafts: false
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['test']);

  // Start a local server
  grunt.registerTask('serve', ['jekyll:serve']);

  // Minify images
  grunt.registerTask('optimise', ['imagemin']);
};
