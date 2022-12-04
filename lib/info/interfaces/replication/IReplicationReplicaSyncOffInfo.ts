import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IReplicationReplicaSyncOffInfo {
  master_sync_in_progress: typeof TINFO_FLAG.OFF;
}
