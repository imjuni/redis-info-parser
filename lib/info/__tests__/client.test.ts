import getClientsInfo from '@info/getClientsInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getClientInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case002.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const clientInfo = getClientsInfo(parsed);
  expect(clientInfo).toMatchObject(expectData);
});
