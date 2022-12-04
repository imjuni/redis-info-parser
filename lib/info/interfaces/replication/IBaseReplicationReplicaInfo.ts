import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import { TINFO_ROLE } from '@info/interfaces/const-enum/TINFO_ROLE';

export default interface IBaseReplicationReplicaInfo {
  role: typeof TINFO_ROLE.SLAVE;
  master_host: string;
  master_port: string;
  master_last_io_seconds_ago: string;
  slave_repl_offset: string;
  slave_priority: string;
  slave_read_only: TINFO_FLAG;
  connected_slaves: string;
  min_slaves_good_slaves: string;
}
