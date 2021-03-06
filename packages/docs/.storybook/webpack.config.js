const { highlightLog } = require('../../../scripts/utils');
const path = require('path');
const PATHS = require('../../../config/paths');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

module.exports = ({ config }) => {
  const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          errorsAsWarnings: true
        }
      }
    ]
  };

  if (!process.env.SKIP_DOC_GENERATION) {
    highlightLog('Warning: Prop Types Table Generation is active');
    console.log(`
    
This is slowing down your build tremendously. 
If you don't need the prop tables we strongly recommend to turn it off by adding a '.env' file to the root of the project with the following content:
SKIP_DOC_GENERATION=true
    
`);
    tsLoader.use.push({ loader: require.resolve('./styleInfoLoader.js') });
    tsLoader.use.push({ loader: require.resolve('react-docgen-typescript-loader') });
  }
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        tsLoader,
        {
          test: /\.jsx/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        },
        {
          test: /\.properties$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx', '.jsx'],
      alias: {
        ...config.resolve.alias,
        '@shared': path.join(PATHS.root, 'shared')
      }
    }
  };
};
