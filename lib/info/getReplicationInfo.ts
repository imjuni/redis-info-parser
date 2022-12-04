import getFlag from '@info/common/getFlag';
import IBaseReplicationInfo from '@info/interfaces/replication/IBaseReplicationInfo';
import TReplicationInfo from '@info/interfaces/replication/TReplicationInfo';
import getReplicationReplicaInfo from '@info/replication-info/getReplicationReplicaInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getReplicationInfo(
  stage02Data: ReturnType<typeof parseStage2>,
): TReplicationInfo {
  const section = stage02Data[TINFO_SECTION.REPLICATION];

  const baseReplicationInfo: IBaseReplicationInfo = {
    connected_slaves: section.connected_slaves,
    master_replid: section.master_replid,
    master_replid2: section.master_replid2,
    master_repl_offset: section.master_repl_offset,
    second_repl_offset: section.second_repl_offset,
    repl_backlog_active: getFlag(section.repl_backlog_active),
    repl_backlog_size: section.repl_backlog_size,
    repl_backlog_first_byte_offset: section.repl_backlog_first_byte_offset,
    repl_backlog_histlen: section.repl_backlog_histlen,
  };

  const replicationInfo: TReplicationInfo = {
    ...baseReplicationInfo,
    ...getReplicationReplicaInfo(section),
  };

  return replicationInfo;
}
