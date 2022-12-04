import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IPersistenceLoadingOnInfo {
  loading: typeof TINFO_FLAG.ON;
  loading_start_time: string;
  loading_total_bytes: number;
  loading_rdb_used_mem: number;
  loading_loaded_bytes: number;
  loading_loaded_perc: string;
  loading_eta_seconds: number;
}
