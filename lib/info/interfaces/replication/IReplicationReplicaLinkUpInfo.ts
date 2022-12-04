import { TLINK_STATUS } from '@info/interfaces/const-enum/TLINK_STATUS';

export default interface IReplicationReplicaLinkUpInfo {
  master_link_status: typeof TLINK_STATUS.UP;
}
