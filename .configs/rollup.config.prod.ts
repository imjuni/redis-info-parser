import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';
import { parse } from 'jsonc-parser';
import readPackage from 'read-pkg';
import ts from 'rollup-plugin-ts';

const pkg = readPackage.sync();
const tsconfig = parse(fs.readFileSync('tsconfig.prod.json').toString());

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
      ts(tsconfig.compilerOptions),
    ],
  },
];
