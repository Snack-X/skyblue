module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      normal: {
        options: {
          style: "expanded",
          sourcemap: "none"
        },
        files: [{
          src: ["sass/skyblue.scss"],
          dest: "css/skyblue.css"
        }]
      },
      min: {
        options: {
          style: "compressed",
          sourcemap: "none"
        },
        files: [{
          src: ["sass/skyblue.scss"],
          dest: "css/skyblue.min.css"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["sass:normal", "sass:min"]);
};
