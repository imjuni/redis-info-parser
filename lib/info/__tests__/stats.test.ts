import getStatsInfo from '@info/getStatsInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getStats', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case006.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const statsInfo = getStatsInfo(parsed);
  expect(statsInfo).toMatchObject(expectData);
});

test('test getStats', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case006.json'));

  const parsed = parseStage2(parseStage1(infoStr));
  const data = {
    ...parsed,
    [TINFO_SECTION.STATS]: {
      ...parsed[TINFO_SECTION.STATS],
      acl_access_denied_auth: '1111',
      acl_access_denied_cmd: '2222',
      acl_access_denied_key: '3333',
      acl_access_denied_channel: '4444',
    },
  };

  const statsInfo = getStatsInfo(data);

  expect(statsInfo).toMatchObject({
    ...expectData,
    acl_access_denied_auth: 1111,
    acl_access_denied_cmd: 2222,
    acl_access_denied_key: 3333,
    acl_access_denied_channel: 4444,
  });
});
