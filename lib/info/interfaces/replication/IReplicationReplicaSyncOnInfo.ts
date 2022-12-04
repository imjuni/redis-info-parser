import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IReplicationReplicaSyncOnInfo {
  master_sync_in_progress: typeof TINFO_FLAG.ON;
  master_sync_left_bytes: string;
  master_sync_last_io_seconds_ago: string;
}
