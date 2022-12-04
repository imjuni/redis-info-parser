import getClientsInfo from '@info/getClientsInfo';
import getClusterInfo from '@info/getClusterInfo';
import getCommandStatsInfo from '@info/getCommandStatInfo';
import getCpuInfo from '@info/getCpuInfo';
import getErrorStats from '@info/getErrorStats';
import getKeyspacesInfo from '@info/getKeyspacesInfo';
import getLatencyStats from '@info/getLatencyStats';
import getMemoryInfo from '@info/getMemoryInfo';
import getPersistenceInfo from '@info/getPersistenceInfo';
import getReplicationInfo from '@info/getReplicationInfo';
import getServerInfo from '@info/getServerInfo';
import getStatsInfo from '@info/getStatsInfo';
import IRedisInfo from '@info/interfaces/IRedisInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import type parseStage2 from '@parser/parseStage2';

function parseStage3<T extends boolean | undefined>(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigIntArgs?: T,
): T extends true ? IRedisInfo<BigInt> : IRedisInfo<number>;
function parseStage3<T extends boolean | undefined>(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigIntArgs?: T,
): IRedisInfo<BigInt | number> {
  const info: IRedisInfo<BigInt | number> = {
    [TINFO_SECTION.PERSISTENCE]: getPersistenceInfo(stage02Data),
    [TINFO_SECTION.SERVER]: getServerInfo(stage02Data),
    [TINFO_SECTION.CLIENTS]: getClientsInfo(stage02Data),
    [TINFO_SECTION.STATS]: getStatsInfo(stage02Data, useBigIntArgs),
    [TINFO_SECTION.MEMORY]: getMemoryInfo(stage02Data, useBigIntArgs),
    [TINFO_SECTION.REPLICATION]: getReplicationInfo(stage02Data),
    [TINFO_SECTION.CPU]: getCpuInfo(stage02Data),
    [TINFO_SECTION.ERROR_STATS]: getErrorStats(stage02Data),
    [TINFO_SECTION.CLUSTER]: getClusterInfo(stage02Data),
    [TINFO_SECTION.KEYSPACE]: getKeyspacesInfo(stage02Data),
    [TINFO_SECTION.COMMAND_STATS]: getCommandStatsInfo(stage02Data),
    [TINFO_SECTION.LATENCY_STATS]: getLatencyStats(stage02Data),
  };

  return info;
}

export default parseStage3;
