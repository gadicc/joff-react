module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ],

    tests: [
      'src/**/*.test.js'
    ],

    compilers: {
      'src/**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'react']
      })
    },

    env: {
      type: 'node'
    },

    testFramework: 'jest'
  };
};
