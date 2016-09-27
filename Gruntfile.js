//Gruntfile
module.exports = function(grunt) {

  // requirejs compile options
  var compileOptions = {

      mainConfigFile: 'app/js/main.js',
      baseUrl: 'app/js',
      include: ['main'],
      out: 'dist/js/main.min.js',
      removeCombined: false,
      findNestedDependencies: true,

      //Removes console.logs for production
      onBuildWrite: function (moduleName, path, contents) {
          if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
          return contents;
      }
  }

  //Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    less: {
        development: {
            options: {
              compress: false,  // no minification in dev
            },
            files: {
              //compiling base.less into styles.css
              "./dist/styles/styles.css": "./app/styles/styles.css"
            }
        },
        production: {
          options: {
            cleancss: true, // minify css
            // compress: true, // minify css
          },
          files: {
            //compiling base.less into main.min.css
            "./dist/styles/styles.css": "./app/styles/styles.css"
          }
        }
    },
    requirejs: {
        compile: {
            options : compileOptions
        }
    },
    watch: {
        less: {
            // Watch all .less files from the styles directory)
            files: ['app/styles/*.less'],
            tasks: ['less'],
            // Reloads the browser
            options: {
              livereload: true  
            }
        },
        requirejs: {
            // Watch only main.js so that we do not constantly recompile the .js files
            files: [ 'app/js/main.js' ],
            tasks: [ 'requirejs' ],
            // Reloads the browser
            options: {
              livereload: true  
            }
        }
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definition
  grunt.registerTask('default', ['watch']);

};
