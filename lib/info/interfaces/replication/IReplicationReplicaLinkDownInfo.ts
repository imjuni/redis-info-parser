import { TLINK_STATUS } from '@info/interfaces/const-enum/TLINK_STATUS';

export default interface IReplicationReplicaLinkDownInfo {
  master_link_status: typeof TLINK_STATUS.DOWN;
  master_link_down_since_seconds: string;
}
