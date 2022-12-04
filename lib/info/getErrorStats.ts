import getKeyValue from '@info/common/getKeyValue';
import IErrorStat from '@info/interfaces/error-stat/IErrorStat';
import IErrorStats from '@info/interfaces/error-stat/IErrorStats';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getErrorStats(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.ERROR_STATS];

  const commandStats = Object.entries(section)
    .map(([key, value]) => ({ key, value }))
    .map((entry) => {
      const statInfos = entry.value
        .split(',')
        .map((db) => db.trim())
        .map((line) => getKeyValue(line));

      const nextKey = entry.key.replace('errorstat_', '');

      const nextValue = statInfos.reduce<IErrorStat>(
        (aggregation, statInfo) => {
          return { ...aggregation, [statInfo.key]: statInfo.value };
        },
        {
          count: 0,
        },
      );

      return { [nextKey]: nextValue };
    })
    .reduce<IErrorStats>((aggregation, commandStat) => {
      return { ...aggregation, ...commandStat };
    }, {});

  return commandStats;
}
