import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import readPackage from 'read-pkg';

const pkg = readPackage.sync();

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.cjs',
      },
      {
        format: 'esm',
        file: 'dist/esm/index.mjs',
      },
    ],
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          return pkg?.dependencies?.[module] == null && pkg?.devDependencies?.[module] == null;
        },
      }),
      ts({ tsconfig: 'tsconfig.prod.json', compilerOptions: { declarationDir: 'typings' } }),
    ],
  },
];
