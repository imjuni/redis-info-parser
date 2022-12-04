import ICommandStats from '@info/interfaces/command-stat/ICommandStats';
import IErrorStats from '@info/interfaces/error-stat/IErrorStats';
import IClientsInfo from '@info/interfaces/IClientsInfo';
import IClusterInfo from '@info/interfaces/IClusterInfo';
import ICPUInfo from '@info/interfaces/ICPUInfo';
import IKeyspacesInfo from '@info/interfaces/IKeyspacesInfo';
import IMemoryInfo from '@info/interfaces/IMemoryInfo';
import IServerInfo from '@info/interfaces/IServerInfo';
import IStatsInfo from '@info/interfaces/IStatsInfo';
import ILatencyStats from '@info/interfaces/latency-stat/ILatencyStats';
import TPersistenceInfo from '@info/interfaces/persistence/TPersistenceInfo';
import TReplicationInfo from '@info/interfaces/replication/TReplicationInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';

export default interface IRedisInfo<T extends BigInt | number> {
  [TINFO_SECTION.PERSISTENCE]: TPersistenceInfo;
  [TINFO_SECTION.SERVER]: IServerInfo;
  [TINFO_SECTION.CLIENTS]: IClientsInfo;
  [TINFO_SECTION.STATS]: IStatsInfo<T>;
  [TINFO_SECTION.MEMORY]: IMemoryInfo<T>;
  [TINFO_SECTION.REPLICATION]: TReplicationInfo;
  [TINFO_SECTION.CPU]: ICPUInfo;
  [TINFO_SECTION.ERROR_STATS]: IErrorStats;
  [TINFO_SECTION.CLUSTER]: IClusterInfo;
  [TINFO_SECTION.KEYSPACE]: IKeyspacesInfo;
  [TINFO_SECTION.COMMAND_STATS]: ICommandStats;
  [TINFO_SECTION.LATENCY_STATS]: ILatencyStats;
}
