import getFlag from '@info/common/getFlag';
import { TINFO_ROLE } from '@info/interfaces/const-enum/TINFO_ROLE';
import IBaseReplicationReplicaInfo from '@info/interfaces/replication/IBaseReplicationReplicaInfo';
import IReplicationMasterInfo from '@info/interfaces/replication/IReplicationMasterInfo';
import TReplicationReplicaInfo from '@info/interfaces/replication/IReplicationReplicaInfo';
import getReplicationReplicaLinkInfo from '@info/replication-info/getReplicationReplicaLinkInfo';
import getReplicationReplicaSyncInfo from '@info/replication-info/getReplicationReplicaSyncInfo';
import parseStage2 from '@parser/parseStage2';

export default function getReplicationReplicaInfo(
  section: ReturnType<typeof parseStage2>['Replication'],
) {
  if (section.role === TINFO_ROLE.MASTER) {
    const masterInfo: IReplicationMasterInfo = {
      role: TINFO_ROLE.MASTER,
    };

    return masterInfo;
  }

  const baseReplicationReplicaInfo: IBaseReplicationReplicaInfo = {
    role: TINFO_ROLE.SLAVE,
    master_host: section.master_host,
    master_port: section.master_port,
    master_last_io_seconds_ago: section.master_last_io_seconds_ago,
    slave_repl_offset: section.slave_repl_offset,
    slave_priority: section.slave_priority,
    slave_read_only: getFlag(section.slave_read_only),
    connected_slaves: section.connected_slaves,
    min_slaves_good_slaves: section.min_slaves_good_slaves,
  };

  const replicationReplicaInfo: TReplicationReplicaInfo = {
    ...baseReplicationReplicaInfo,
    ...getReplicationReplicaSyncInfo(section),
    ...getReplicationReplicaLinkInfo(section),
  };

  return replicationReplicaInfo;
}
