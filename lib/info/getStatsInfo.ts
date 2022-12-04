import getBigInt from '@info/common/getBigInt';
import getNumber from '@info/common/getNumber';
import IStatsInfo from '@info/interfaces/IStatsInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

function getStatsInfo<T extends boolean | undefined>(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigInt?: T,
): T extends true ? IStatsInfo<BigInt> : IStatsInfo<number>;
function getStatsInfo(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigInt?: boolean,
): IStatsInfo<BigInt | number> {
  const section = stage02Data[TINFO_SECTION.STATS];

  const statsInfo: IStatsInfo<BigInt | number> = {
    total_connections_received: getNumber(section.total_connections_received),
    total_commands_processed: getNumber(section.total_commands_processed),
    instantaneous_ops_per_sec: getNumber(section.instantaneous_ops_per_sec),
    total_net_input_bytes: getBigInt(section.total_net_input_bytes, useBigInt),
    total_net_output_bytes: getBigInt(section.total_net_output_bytes, useBigInt),
    total_net_repl_input_bytes: getBigInt(section.total_net_repl_input_bytes, useBigInt),
    total_net_repl_output_bytes: getBigInt(section.total_net_repl_output_bytes, useBigInt),
    instantaneous_input_kbps: getNumber(section.instantaneous_input_kbps),
    instantaneous_output_kbps: getNumber(section.instantaneous_output_kbps),
    instantaneous_input_repl_kbps: getNumber(section.instantaneous_input_repl_kbps),
    instantaneous_output_repl_kbps: getNumber(section.instantaneous_output_repl_kbps),
    rejected_connections: getNumber(section.rejected_connections),
    sync_full: getNumber(section.sync_full),
    sync_partial_ok: getNumber(section.sync_partial_ok),
    sync_partial_err: getNumber(section.sync_partial_err),
    expired_keys: getNumber(section.expired_keys),
    expired_stale_perc: getNumber(section.expired_stale_perc),
    expired_time_cap_reached_count: getNumber(section.expired_time_cap_reached_count),
    expire_cycle_cpu_milliseconds: getNumber(section.expire_cycle_cpu_milliseconds),
    evicted_keys: getNumber(section.evicted_keys),
    evicted_clients: getNumber(section.evicted_clients),
    total_eviction_exceeded_time: getNumber(section.total_eviction_exceeded_time),
    current_eviction_exceeded_time: getNumber(section.current_eviction_exceeded_time),
    keyspace_hits: getNumber(section.keyspace_hits),
    keyspace_misses: getNumber(section.keyspace_misses),
    pubsub_channels: getNumber(section.pubsub_channels),
    pubsub_patterns: getNumber(section.pubsub_patterns),
    pubsubshard_channels: getNumber(section.pubsubshard_channels),
    latest_fork_usec: getNumber(section.latest_fork_usec),
    total_forks: getNumber(section.total_forks),
    migrate_cached_sockets: getNumber(section.migrate_cached_sockets),
    slave_expires_tracked_keys: getNumber(section.slave_expires_tracked_keys),
    active_defrag_hits: getNumber(section.active_defrag_hits),
    active_defrag_misses: getNumber(section.active_defrag_misses),
    active_defrag_key_hits: getNumber(section.active_defrag_key_hits),
    active_defrag_key_misses: getNumber(section.active_defrag_key_misses),
    total_active_defrag_time: getNumber(section.total_active_defrag_time),
    current_active_defrag_time: getNumber(section.current_active_defrag_time),
    tracking_total_keys: getNumber(section.tracking_total_keys),
    tracking_total_items: getNumber(section.tracking_total_items),
    tracking_total_prefixes: getNumber(section.tracking_total_prefixes),
    unexpected_error_replies: getNumber(section.unexpected_error_replies),
    total_error_replies: getNumber(section.total_error_replies),
    dump_payload_sanitizations: getNumber(section.dump_payload_sanitizations),
    total_reads_processed: getNumber(section.total_reads_processed),
    total_writes_processed: getNumber(section.total_writes_processed),
    io_threaded_reads_processed: getNumber(section.io_threaded_reads_processed),
    io_threaded_writes_processed: getNumber(section.io_threaded_writes_processed),
    acl_access_denied_auth: getNumber(section.acl_access_denied_auth),
    acl_access_denied_cmd: getNumber(section.acl_access_denied_cmd),
    acl_access_denied_key: getNumber(section.acl_access_denied_key),
    acl_access_denied_channel: getNumber(section.acl_access_denied_channel),
  };

  return statsInfo;
}

export default getStatsInfo;
