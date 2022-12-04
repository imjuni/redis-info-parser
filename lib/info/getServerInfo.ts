import getFlag from '@info/common/getFlag';
import IServerInfo from '@info/interfaces/IServerInfo';
import getArchBits from '@info/server-info/getArchBits';
import getRedisMode from '@info/server-info/getRedisMode';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getServerInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.SERVER];

  const serverInfo: IServerInfo = {
    redis_version: section.redis_version,
    redis_git_sha1: section.redis_git_sha1,
    redis_git_dirty: getFlag(section.redis_git_dirty),
    redis_build_id: section.redis_build_id,
    redis_mode: getRedisMode(section.redis_mode),
    os: section.os,
    arch_bits: getArchBits(section.arch_bits),
    multiplexing_api: section.multiplexing_api,
    atomicvar_api: section.atomicvar_api,
    gcc_version: section.gcc_version,
    process_id: section.process_id,
    run_id: section.run_id,
    tcp_port: Number.parseInt(section.tcp_port, 10),
    uptime_in_seconds: section.uptime_in_seconds,
    uptime_in_days: section.uptime_in_days,
    hz: section.hz,
    lru_clock: section.lru_clock,
    executable: section.executable,
    config_file: section.config_file,
  };

  return serverInfo;
}
