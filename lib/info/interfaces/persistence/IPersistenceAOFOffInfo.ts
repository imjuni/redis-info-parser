import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IPersistenceAOFOffInfo {
  aof_enabled: typeof TINFO_FLAG.OFF;
}
