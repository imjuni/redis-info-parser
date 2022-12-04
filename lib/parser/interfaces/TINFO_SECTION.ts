export const TINFO_SECTION = {
  UNKNOWN: 'unknown',
  PERSISTENCE: 'Persistence',
  SERVER: 'Server',
  CLIENTS: 'Clients',
  STATS: 'Stats',
  MEMORY: 'Memory',
  REPLICATION: 'Replication',
  LATENCY_STATS: 'Latencystats',
  CPU: 'CPU',
  MODULES: 'Modules',
  ERROR_STATS: 'Errorstats',
  CLUSTER: 'Cluster',
  KEYSPACE: 'Keyspace',
  COMMAND_STATS: 'Commandstats',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TINFO_SECTION = typeof TINFO_SECTION[keyof typeof TINFO_SECTION]; // 'iOS' | 'Android'
