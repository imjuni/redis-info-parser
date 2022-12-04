import getBigInt from '@info/common/getBigInt';
import getFlag from '@info/common/getFlag';
import getKeyValue from '@info/common/getKeyValue';
import getNumber from '@info/common/getNumber';
import getNumberOrThrow from '@info/common/getNumberOrThrow';
import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import 'jest';

test('test getRedisMode', async () => {
  const mode01 = getFlag('1');
  expect(mode01).toEqual(TINFO_FLAG.ON);

  const mode02 = getFlag('0');
  expect(mode02).toEqual(TINFO_FLAG.OFF);

  const mode03 = getFlag('A');
  expect(mode03).toEqual(TINFO_FLAG.OFF);
});

test('test getBigInt', async () => {
  const mode01 = getBigInt(`${Number.MAX_SAFE_INTEGER}00`, true);
  expect(mode01).toEqual(BigInt(`${Number.MAX_SAFE_INTEGER}00`));

  const mode02 = getBigInt(`${Number.MAX_SAFE_INTEGER}`, false);
  expect(mode02).toEqual(Number.MAX_SAFE_INTEGER);

  const mode03 = getBigInt(`${Number.MAX_SAFE_INTEGER}`);
  expect(mode03).toEqual(Number.MAX_SAFE_INTEGER);
});

test('test getNumber', async () => {
  const mode01 = getNumber(undefined);
  expect(mode01).toEqual(undefined);

  const mode02 = getNumber(null);
  expect(mode02).toEqual(undefined);

  const mode03 = getNumber('ironman');
  expect(mode03).toEqual(undefined);

  const mode04 = getNumber('1111');
  expect(mode04).toEqual(1111);
});

test('test getNumberOrThrow', async () => {
  try {
    getNumberOrThrow(undefined);
  } catch (err) {
    expect(err).toBeDefined();
  }

  try {
    getNumberOrThrow('asdf');
  } catch (err) {
    expect(err).toBeDefined();
  }

  expect(getNumberOrThrow('1234')).toEqual(1234);
});

test('getKeyValue', () => {
  expect(getKeyValue('calls=3')).toMatchObject({ key: 'calls', value: '3' });
  expect(getKeyValue('usec_per_call=2.00')).toMatchObject({ key: 'usec_per_call', value: '2.00' });
  expect(getKeyValue('rejected_calls=0')).toMatchObject({ key: 'rejected_calls', value: '0' });
  expect(getKeyValue('keys=2081328')).toMatchObject({ key: 'keys', value: '2081328' });
  expect(getKeyValue('expires=4795')).toMatchObject({ key: 'expires', value: '4795' });
  expect(getKeyValue('avg_ttl=7426536081263272')).toMatchObject({
    key: 'avg_ttl',
    value: '7426536081263272',
  });
});
