// https://github.com/facebook/stylex/issues/500

import path from 'path';
import { fileURLToPath } from 'url';
import stylexPlugin from '@stylexjs/esbuild-plugin';
import { defineConfig } from 'tsup';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ['src/index.ts'],
  bundle: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
  esbuildPlugins: [
    stylexPlugin({
      // Keep css styles in js bundle
      dev: true,
      generatedCSSFileName: 'dist/stylex.css',
      stylexImports: ['@stylexjs/stylex'],
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: __dirname,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any,
  ],
});
