import getClusterInfo from '@info/getClusterInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getClusterInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case012.json'));

  const parsed = parseStage2(parseStage1(infoStr));
  const clusterInfo = getClusterInfo(parsed);

  expect(clusterInfo).toMatchObject(expectData);
});
