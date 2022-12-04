import getServerInfo from '@info/getServerInfo';
import { TARCH_BITS } from '@info/interfaces/const-enum/TARCH_BITS';
import { TREDIS_MODE } from '@info/interfaces/const-enum/TREDIS_MODE';
import getArchBits from '@info/server-info/getArchBits';
import getRedisMode from '@info/server-info/getRedisMode';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getRedisMode', async () => {
  const mode01 = getRedisMode('cluster');
  expect(mode01).toEqual(TREDIS_MODE.CLUSTER);

  const mode02 = getRedisMode('sentinel');
  expect(mode02).toEqual(TREDIS_MODE.SENTINEL);

  const mode03 = getRedisMode('standalone');
  expect(mode03).toEqual(TREDIS_MODE.STANDALONE);

  const mode04 = getRedisMode('asdf');
  expect(mode04).toEqual(TREDIS_MODE.STANDALONE);
});

test('test getArchBits', async () => {
  const mode01 = getArchBits('32');
  expect(mode01).toEqual(TARCH_BITS[32]);

  const mode02 = getArchBits('64');
  expect(mode02).toEqual(TARCH_BITS[64]);

  const mode03 = getArchBits('128');
  expect(mode03).toEqual(TARCH_BITS[64]);
});

test('test getServerInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case001.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const serverInfo = getServerInfo(parsed);
  expect(serverInfo).toMatchObject(expectData);
});
