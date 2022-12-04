import getMemoryInfo from '@info/getMemoryInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

const casefile = [__dirname, '..', '..', '..', 'example', 'redis-info-sample01.txt'];

beforeAll(() => {
  // @ts-ignore
  // eslint-disable-next-line no-extend-native, func-names
  BigInt.prototype.toJSON = function () {
    this.toString();
  };
});

test('test getMemoryInfo bigint', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case003.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const memoryInfo = getMemoryInfo(parsed, true);
  expect(memoryInfo).toMatchObject(expectData);
});

test('test getMemoryInfo number', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case004.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const memoryInfo = getMemoryInfo(parsed);
  expect(memoryInfo).toMatchObject(expectData);
});
