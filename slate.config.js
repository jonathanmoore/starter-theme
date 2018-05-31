/* eslint-disable no-undef */

const path = require('path');

const alias = {
  jquery: path.resolve('./node_modules/jquery'),
  'lodash-es': path.resolve('./node_modules/lodash-es'),
};

module.exports = {
  slateCssVarLoader: {
    cssVarLoaderLiquidPath: ['src/snippets/css-variables.liquid'],
  },
  slateTools: {
    promptSettings: false,
    extends: {
      dev: {
        resolve: {alias},
        module: {
          rules: [
            {
              test: require.resolve('owl.carousel'),
              use: 'imports-loader?jQuery=jquery,$=jquery',
            },
          ],
        },
      },
      prod: {
        resolve: {alias},
        module: {
          rules: [
            {
              test: require.resolve('owl.carousel'),
              use: 'imports-loader?jQuery=jquery,$=jquery',
            },
          ],
        },
      },
    },
  },
};
