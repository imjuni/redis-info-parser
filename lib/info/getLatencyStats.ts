import getKeyValue from '@info/common/getKeyValue';
import ILatencyStat from '@info/interfaces/latency-stat/ILatencyStat';
import ILatencyStats from '@info/interfaces/latency-stat/ILatencyStats';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getLatencyStats(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.LATENCY_STATS];

  const commandStats = Object.entries(section)
    .map(([key, value]) => ({ key, value }))
    .map((entry) => {
      const statInfos = entry.value
        .split(',')
        .map((db) => db.trim())
        .map((line) => getKeyValue(line));

      const nextKey = entry.key.replace('latency_percentiles_usec_', '');
      const [nextPrimaryKey, nextSubKey] =
        nextKey.indexOf('|') >= 0
          ? nextKey.split('|').map((element) => element.trim())
          : [nextKey, undefined];

      const nextValue = statInfos.reduce<ILatencyStat>(
        (aggregation, statInfo) => {
          return { ...aggregation, [statInfo.key]: statInfo.value };
        },
        {
          p50: 0,
          p99: 0,
          'p99.9': 0,
        },
      );

      nextValue.sub = nextSubKey;

      return { [nextPrimaryKey]: nextValue };
    })
    .reduce<ILatencyStats>((aggregation, commandStat) => {
      return { ...aggregation, ...commandStat };
    }, {});

  return commandStats;
}
