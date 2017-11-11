const path = require('path')

const extractQueryPlugin = path.resolve(
  __dirname,
  `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
)

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    // Temporary workaround.
    // Here we override the Webpack plugin during the `build-javascript` stage to make everything
    // compile down to es5 - turns out Webpack 1's UglifyJsPlugin doesn't like that we have some
    // ES6 stuff littered in our final bundle...
    config.loader('typescript', {
      test: /\.tsx?$/,
      loaders: [
        `babel-loader?${JSON.stringify({ presets: ['babel-preset-env'], plugins: [extractQueryPlugin] })}`,
        'ts-loader'
      ]
    })
  }
}
