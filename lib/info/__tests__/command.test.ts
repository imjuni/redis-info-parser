import getCommandStatsInfo from '@info/getCommandStatInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getCommandStatsInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-commandstats.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case010.json'));

  const parsed = parseStage2(parseStage1(infoStr));
  const commandStats = getCommandStatsInfo(parsed);

  expect(commandStats).toMatchObject(expectData);
});
