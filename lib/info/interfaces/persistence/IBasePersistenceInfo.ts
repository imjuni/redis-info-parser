import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IBasePersistenceInfo {
  rdb_changes_since_last_save: string;
  rdb_bgsave_in_progress: TINFO_FLAG;
  rdb_last_save_time: string;
  rdb_last_bgsave_status: string;
  rdb_last_bgsave_time_sec: string;
  rdb_current_bgsave_time_sec: string;
  rdb_last_cow_size: string;
  aof_rewrite_in_progress: TINFO_FLAG;
  aof_rewrite_scheduled: TINFO_FLAG;
  aof_last_rewrite_time_sec: string;
  aof_current_rewrite_time_sec: string;
  aof_last_bgrewrite_status: string;
  aof_last_write_status: string;
  aof_last_cow_size: string;
}
