import getErrorStats from '@info/getErrorStats';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getErrorStats', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-errorstats.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case013.json'));

  const parsed = parseStage2(parseStage1(infoStr));
  const errorStatsInfo = getErrorStats(parsed);

  expect(errorStatsInfo).toMatchObject(expectData);
});
