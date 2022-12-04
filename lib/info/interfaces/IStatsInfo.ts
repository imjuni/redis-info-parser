export default interface IStatsInfo<T extends BigInt | number> {
  /** Total number of connections accepted by the server */
  total_connections_received?: number;

  /** Total number of commands processed by the server */
  total_commands_processed?: number;

  /** Number of commands processed per second */
  instantaneous_ops_per_sec?: number;

  /** The total number of bytes read from the network */
  total_net_input_bytes: T;

  /** The total number of bytes written to the network */
  total_net_output_bytes: T;

  /** The total number of bytes read from the network for replication purposes */
  total_net_repl_input_bytes: T;

  /** The total number of bytes written to the network for replication purposes */
  total_net_repl_output_bytes: T;

  /** The network's read rate per second in KB/sec */
  instantaneous_input_kbps?: number;

  /** The network's write rate per second in KB/sec */
  instantaneous_output_kbps?: number;

  /** The network's read rate per second in KB/sec for replication purposes */
  instantaneous_input_repl_kbps?: number;

  /** The network's write rate per second in KB/sec for replication purposes */
  instantaneous_output_repl_kbps?: number;

  /** Number of connections rejected because of maxclients limit */
  rejected_connections?: number;

  /** The number of full resyncs with replicas */
  sync_full?: number;

  /** The number of accepted partial resync requests */
  sync_partial_ok?: number;

  /** The number of denied partial resync requests */
  sync_partial_err?: number;

  /** Total number of key expiration events */
  expired_keys?: number;

  /** The percentage of keys probably expired */
  expired_stale_perc?: number;

  /** The count of times that active expiry cycles have stopped early */
  expired_time_cap_reached_count?: number;

  /** The cumulative amount of time spend on active expiry cycles */
  expire_cycle_cpu_milliseconds?: number;

  /** Number of evicted keys due to maxmemory limit */
  evicted_keys?: number;

  /** Number of evicted clients due to maxmemory-clients limit. Added in Redis 7.0. */
  evicted_clients?: number;

  /** Total time used_memory was greater than maxmemory since server startup, in milliseconds */
  total_eviction_exceeded_time?: number;

  /** The time passed since used_memory last rose above maxmemory, in milliseconds */
  current_eviction_exceeded_time?: number;

  /** Number of successful lookup of keys in the main dictionary */
  keyspace_hits?: number;

  /** Number of failed lookup of keys in the main dictionary */
  keyspace_misses?: number;

  /** Global number of pub/sub channels with client subscriptions */
  pubsub_channels?: number;

  /** Global number of pub/sub pattern with client subscriptions */
  pubsub_patterns?: number;

  /** Global number of pub/sub shard channels with client subscriptions. Added in Redis 7.0.3 */
  pubsubshard_channels?: number;

  /** Duration of the latest fork operation in microseconds */
  latest_fork_usec?: number;

  /** Total number of fork operations since the server start */
  total_forks?: number;

  /** The number of sockets open for MIGRATE purposes */
  migrate_cached_sockets?: number;

  /** The number of keys tracked for expiry purposes (applicable only to writable replicas) */
  slave_expires_tracked_keys?: number;

  /** Number of value reallocations performed by active the defragmentation process */
  active_defrag_hits?: number;

  /** Number of aborted value reallocations started by the active defragmentation process */
  active_defrag_misses?: number;

  /** Number of keys that were actively defragmented */
  active_defrag_key_hits?: number;

  /** Number of keys that were skipped by the active defragmentation process */
  active_defrag_key_misses?: number;

  /** Total time memory fragmentation was over the limit, in milliseconds */
  total_active_defrag_time?: number;

  /** The time passed since memory fragmentation last was over the limit, in milliseconds */
  current_active_defrag_time?: number;

  /** Number of keys being tracked by the server */
  tracking_total_keys?: number;

  /** Number of items, that is the sum of clients number for each key, that are being tracked */
  tracking_total_items?: number;

  /** Number of tracked prefixes in server's prefix table (only applicable for broadcast mode) */
  tracking_total_prefixes?: number;

  /** Number of unexpected error replies, that are types of errors from an AOF load or replication */
  unexpected_error_replies?: number;

  /**
   * Total number of issued error replies, that is the sum of rejected commands
   * (errors prior command execution) and failed commands (errors within the command execution)
   * */
  total_error_replies?: number;

  /** Total number of dump payload deep integrity validations (see sanitize-dump-payload config). */
  dump_payload_sanitizations?: number;

  /** Total number of read events processed */
  total_reads_processed?: number;

  /** Total number of write events processed */
  total_writes_processed?: number;

  /** Number of read events processed by the main and I/O threads */
  io_threaded_reads_processed?: number;

  /** Number of write events processed by the main and I/O threads */
  io_threaded_writes_processed?: number;

  /** Number of authentication failures */
  acl_access_denied_auth?: number;

  /** Number of commands rejected because of access denied to the command */
  acl_access_denied_cmd?: number;

  /** Number of commands rejected because of access denied to a key */
  acl_access_denied_key?: number;

  /** Number of commands rejected because of access denied to a channel */
  acl_access_denied_channel?: number;
}
