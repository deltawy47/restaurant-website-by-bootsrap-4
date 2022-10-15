'use strict';

module.exports = function (grunt) {
    'use strict';

    module.exports = function (grunt) {
        // Time how long tasks take. Can help when optimizing build times
        require('time-grunt')(grunt);
    
        // Automatically load required Grunt tasks
        require('jit-grunt')(grunt);
    
        // Define the configuration for all the tasks
        grunt.initConfig({
            sass: {
                dist: {
                    files: {
                        'css/tstyles.css': 'css/styles.scss'
                    }
                }
            }
        });
    
        grunt.registerTask('css', ['sass']);
    
    };  grunt.initConfig({

  });
};