import getLatencyStats from '@info/getLatencyStats';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getLatencyStats', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-latencystats.txt',
  );

  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case011.json'));
  const parsed = parseStage2(parseStage1(infoStr));

  const latencyStats = getLatencyStats(parsed);

  expect(latencyStats).toMatchObject(expectData);
});
