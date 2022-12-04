import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import IReplicationReplicaSyncOffInfo from '@info/interfaces/replication/IReplicationReplicaSyncOffInfo';
import IReplicationReplicaSyncOnInfo from '@info/interfaces/replication/IReplicationReplicaSyncOnInfo';
import parseStage2 from '@parser/parseStage2';

export default function getReplicationReplicaSyncInfo(
  section: ReturnType<typeof parseStage2>['Replication'],
) {
  if (section.master_sync_in_progress === TINFO_FLAG.ON) {
    const syncOnInfo: IReplicationReplicaSyncOnInfo = {
      master_sync_in_progress: TINFO_FLAG.ON,
      master_sync_left_bytes: section.master_sync_left_bytes,
      master_sync_last_io_seconds_ago: section.master_sync_last_io_seconds_ago,
    };

    return syncOnInfo;
  }

  const syncOffInfo: IReplicationReplicaSyncOffInfo = {
    master_sync_in_progress: TINFO_FLAG.OFF,
  };

  return syncOffInfo;
}
