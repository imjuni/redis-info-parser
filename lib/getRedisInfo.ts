import IRedisInfo from '@info/interfaces/IRedisInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import parseStage3 from '@parser/parseStage3';

function getRedisInfo<T extends boolean | undefined>(
  info: string,
  useBigIntArgs?: T,
): T extends true ? IRedisInfo<BigInt> : IRedisInfo<number>;
function getRedisInfo<T extends boolean | undefined>(
  info: string,
  useBigIntArgs?: T,
): IRedisInfo<BigInt | number> {
  const useBigInt = useBigIntArgs ?? false;
  const stage01 = parseStage1(info);
  const stage02 = parseStage2(stage01);
  const stage03 = parseStage3(stage02, useBigInt);

  return stage03;
}

export default getRedisInfo;
