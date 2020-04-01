const path = require('path');
const { resolvePath } = require('babel-plugin-module-resolver');

// NOTE: here be dragons
const fixResolvePath = (sourcePath, currentFile, opts) => {
  const ret = resolvePath(sourcePath, currentFile, opts);
  if (!sourcePath.startsWith('~')) return ret;

  const basePath = path.resolve('../');
  const currentFileEndPath = currentFile.substring(basePath.length);
  const currentProject = currentFileEndPath.split(path.sep).filter(Boolean)[0];
  const correctResolvedPath = path.join(basePath, currentProject, `./${sourcePath}`).replace('~', 'src');

  return correctResolvedPath;
};

function config() {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'],
          },
        },
      ],
    ],

    plugins: [
      'babel-plugin-lodash',
      'macros',

      // NOTE: here be tiny dragons
      // The CWD is implicitly provided here so treat alias paths as starting from the
      // root directory of any particular yarn workspace
      // NOTE: to enable VSCode / TypeScript support be sure to add the following to your workspace
      // package's tsconfig.json:
      /*

      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "~/*": ["src/*"]
        }
      }

      */
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./'],
          resolvePath: fixResolvePath,
          alias: {
            '~': ['./src'],
          },
        },
      ],
    ],
  };
}

module.exports = config;
