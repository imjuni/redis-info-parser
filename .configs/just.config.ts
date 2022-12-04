/* eslint-disable import/no-extraneous-dependencies */
import execa from 'execa';
import { logger, parallel, series, task } from 'just-task';
import readPkg from 'read-pkg';

function splitArgs(args: string): string[] {
  return args
    .split(' ')
    .map((line) => line.trim())
    .filter((line) => line != null && line !== '');
}

task('clean', async () => {
  const cmd = 'rimraf';
  const option = 'dist/ artifact/';

  logger.info('clean: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('lint', async () => {
  const cmd = 'eslint';
  const option = '--cache --ext ts,tsx .';

  logger.info('lint: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('+rollup:dev', async () => {
  const cmd = 'rollup';
  const option = '--config ./.configs/rollup.config.dev.ts --configPlugin ts';

  logger.info('Rollup: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    env: {
      NODE_ENV: 'production',
    },
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('+rollup:prod', async () => {
  const cmd = 'rollup';
  const option = '--config ./.configs/rollup.config.prod.ts --configPlugin typescript';

  logger.info('Rollup: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    env: {
      NODE_ENV: 'production',
    },
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('+build', async () => {
  const cmd = 'tsc';
  const option = '--incremental --project tsconfig.json';

  logger.info('Build: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('+pub', async () => {
  const cmd = 'npm';
  const option = 'publish --registry http://localhost:8901 --force';

  logger.info('Publish package to verdaccio: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    env: {
      NODE_ENV: 'production',
      RELEASE_MODE: 'true',
    },
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('unpub', async () => {
  const packageJson = readPkg.sync();
  const cmd = 'npm';
  const option = `unpublish redis-info-parser@${packageJson.version} --registry http://localhost:8901 --force`;

  logger.info('Publish package to verdaccio: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    env: {
      NODE_ENV: 'production',
      RELEASE_MODE: 'true',
    },
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('+pub:prod', async () => {
  const cmd = 'npm';
  const option = 'publish';

  logger.info('Publish package to npm registry: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    env: {
      NODE_ENV: 'production',
      RELEASE_MODE: 'true',
    },
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('clean:file', async () => {
  const cmd = 'rimraf';
  const option = 'dist';

  logger.info('Clean builded directory: ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('ctix:single', async () => {
  const cmd = 'ctix';
  const option = 'single -p ./tsconfig.prod.json -o lib -w --noBackup';

  logger.info('Create index file : ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('ctix:remove', async () => {
  const cmd = 'ctix';
  const option = 'remove -p ./tsconfig.json';

  logger.info('Remove index file : ', cmd, option);

  await execa(cmd, splitArgs(option), {
    stderr: process.stderr,
    stdout: process.stdout,
  });
});

task('build', '+build');
task('rollup:dev', series('clean', 'ctix:single', '+rollup:dev', 'ctix:remove'));
task('rollup:prod', series('clean', 'ctix:single', '+rollup:prod', 'ctix:remove'));
task('pub', series('rollup:prod', '+pub'));
task('clean', parallel('clean:file', 'ctix:remove'));
task('pub:prod', series('rollup:prod', '+pub:prod'));
