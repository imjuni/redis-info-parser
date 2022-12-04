import { TLINK_STATUS } from '@info/interfaces/const-enum/TLINK_STATUS';
import IReplicationReplicaLinkDownInfo from '@info/interfaces/replication/IReplicationReplicaLinkDownInfo';
import IReplicationReplicaLinkUpInfo from '@info/interfaces/replication/IReplicationReplicaLinkUpInfo';
import parseStage2 from '@parser/parseStage2';

export default function getReplicationReplicaLinkInfo(
  section: ReturnType<typeof parseStage2>['Replication'],
) {
  if (section.master_link_status === TLINK_STATUS.UP) {
    const linkUpInfo: IReplicationReplicaLinkUpInfo = {
      master_link_status: TLINK_STATUS.UP,
    };

    return linkUpInfo;
  }

  const linkDownInfo: IReplicationReplicaLinkDownInfo = {
    master_link_status: TLINK_STATUS.DOWN,
    master_link_down_since_seconds: section.master_link_down_since_seconds,
  };

  return linkDownInfo;
}
