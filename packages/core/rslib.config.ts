import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      output: {
        distPath: {
          root: './dist/rslib/esm',
        },
        syntax: ['node 16'],
      },
    },
  ],
  source: {
    define: {
      RSLIB_VERSION: JSON.stringify(require('./package.json').version),
    },
    entry: {
      main: './src/index.ts',
    },
  },
  output: {
    target: 'node',
    externals: {
      '@rsbuild/core': '@rsbuild/core',
      'rsbuild-plugin-dts': 'rsbuild-plugin-dts',
      picocolors: '../../../compiled/picocolors/index.js',
      'fast-glob': '../../../compiled/fast-glob/index.js',
      commander: '../../../compiled/commander/index.js',
    },
  },
  tools: {
    rspack: {
      externalsType: 'module-import',
    },
  },
});
