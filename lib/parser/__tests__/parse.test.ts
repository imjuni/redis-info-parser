import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

const casefile = [__dirname, '..', '..', '..', 'example', 'redis-info-sample01.txt'];

test('test parseStage1', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case001.json'));

  const parsed = parseStage1(infoStr);

  expect(parsed).toMatchObject(expectData);
});

test('test parseStage1 processing unknown', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case002.json'));

  const parsed = parseStage1(`# Unknown\nadsf:1\n${infoStr}`);

  expect(parsed).toMatchObject(expectData);
});

test('test parseStage2', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case003.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  expect(parsed).toMatchObject(expectData);
});
