module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/application.css': 'public/scss/application.scss'
        },
        options: {
          loadPath: 'node_modules/govuk_frontend_toolkit/stylesheets'
        }
      }
    },
    watch: {
      files: ['public/scss/*'],
      tasks: ['sass:dist']
    },
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    concurrent: {
        target: {
            tasks: ['watch', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    smoosher: {
      options: {
        jsTags: { // optional
          start: '<script type="text/javascript">\n',
          end: '\n</script>\n'
        }
      },
      all: {
        files: {
          'public/offline-version.html': 'public/index.html',
        },
      },
    },
  });

//////////////////////////////////////////////////////////////////////////////////////////

  [
    'grunt-contrib-watch',
    'grunt-contrib-sass',
    'grunt-nodemon',
    'grunt-concurrent',
    'grunt-html-smoosher'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

//////////////////////////////////////////////////////////////////////////////////////////

  grunt.registerTask('offline', 'Creates a single html file with everything inlined.', function() {
    //grunt.log.writeln('Downloading and appending JSON data...');
    //grunt.task.run('curl');
    //grunt.task.run('appendData');

    grunt.log.writeln('Inlining...');
    grunt.task.run('smoosher');
  });

//////////////////////////////////////////////////////////////////////////////////////////

  grunt.registerTask('default', ['concurrent']);

};
