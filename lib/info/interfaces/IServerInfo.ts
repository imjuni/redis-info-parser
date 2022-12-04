import { TARCH_BITS } from '@info/interfaces/const-enum/TARCH_BITS';
import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import { TREDIS_MODE } from '@info/interfaces/const-enum/TREDIS_MODE';

export default interface IServerInfo {
  redis_version: string;
  redis_git_sha1: string;
  redis_git_dirty: TINFO_FLAG;
  redis_build_id: string;
  redis_mode: TREDIS_MODE;
  os: string;
  arch_bits: TARCH_BITS;
  multiplexing_api: string;
  atomicvar_api: string;
  gcc_version: string;
  process_id: string;
  run_id: string;
  tcp_port: number;
  uptime_in_seconds: string;
  uptime_in_days: string;
  hz: string;
  lru_clock: string;
  executable: string;
  config_file: string;
}
