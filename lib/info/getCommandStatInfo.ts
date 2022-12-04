import getKeyValue from '@info/common/getKeyValue';
import ICommandStat from '@info/interfaces/command-stat/ICommandStat';
import ICommandStats from '@info/interfaces/command-stat/ICommandStats';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getCommandStatsInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.COMMAND_STATS];

  const commandStats = Object.entries(section)
    .map(([key, value]) => ({ key, value }))
    .map((entry) => {
      const statInfos = entry.value
        .split(',')
        .map((db) => db.trim())
        .map((line) => getKeyValue(line));

      const nextKey = entry.key.replace('cmdstat_', '');
      const nextValue = statInfos.reduce<ICommandStat>(
        (aggregation, statInfo) => {
          return { ...aggregation, [statInfo.key]: statInfo.value };
        },
        {
          calls: 0,
          usec: 0,
          usec_per_call: 0,
          rejected_calls: 0,
          failed_calls: 0,
        },
      );

      return { [nextKey]: nextValue };
    })
    .reduce<ICommandStats>((aggregation, commandStat) => {
      return { ...aggregation, ...commandStat };
    }, {});

  return commandStats;
}
