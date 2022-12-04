import getKeyspacesInfo from '@info/getKeyspacesInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getKeyspaceInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case009.json'));

  const parsed = parseStage2(parseStage1(infoStr));
  const keyspacesInfo = getKeyspacesInfo(parsed);

  expect(keyspacesInfo).toMatchObject(expectData);
});
