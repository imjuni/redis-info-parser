import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IPersistenceAOFOnInfo {
  aof_enabled: typeof TINFO_FLAG.ON;
  aof_current_size: number;
  aof_base_size: number;
  aof_pending_rewrite: TINFO_FLAG;
  aof_buffer_length: number;
  aof_rewrite_buffer_length?: number | undefined;
  aof_pending_bio_fsync: string;
  aof_delayed_fsync: string;
}
