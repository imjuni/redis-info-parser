import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default function getFlag(flag: string) {
  if (flag === TINFO_FLAG.ON) {
    return TINFO_FLAG.ON;
  }

  return TINFO_FLAG.OFF;
}
