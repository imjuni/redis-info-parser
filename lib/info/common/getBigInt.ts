function getBigInt<T extends boolean | undefined>(
  num: string,
  useBigInt?: T,
): T extends true ? BigInt : number;
function getBigInt(num: string, useBigInt?: boolean): BigInt | number {
  if (useBigInt === true) {
    return BigInt(num);
  }

  return Number.parseInt(num, 10);
}

export default getBigInt;
