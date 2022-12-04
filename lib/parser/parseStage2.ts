import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';

export default function parseStage2(
  stage01Data: Record<TINFO_SECTION, string[]>,
): Record<TINFO_SECTION, Record<string, string>> {
  const stage02Data = Object.entries(stage01Data)
    .map(([key, value]): { key: TINFO_SECTION; value: string[] } => ({
      key: key as TINFO_SECTION,
      value,
    }))
    .map((section) => {
      return {
        key: section.key,
        value: section.value
          .map((line) => line.split(':').map((element) => element.trim()))
          .map((entry) => ({ key: entry[0], value: entry[1] }))
          .reduce((aggregation, entry) => {
            return { ...aggregation, [entry.key]: entry.value };
          }, {}),
      };
    })
    .reduce(
      (aggregation, section) => {
        return { ...aggregation, [section.key]: { ...aggregation[section.key], ...section.value } };
      },
      {
        [TINFO_SECTION.UNKNOWN]: {},
        [TINFO_SECTION.PERSISTENCE]: {},
        [TINFO_SECTION.SERVER]: {},
        [TINFO_SECTION.CLIENTS]: {},
        [TINFO_SECTION.STATS]: {},
        [TINFO_SECTION.MEMORY]: {},
        [TINFO_SECTION.REPLICATION]: {},
        [TINFO_SECTION.CPU]: {},
        [TINFO_SECTION.MODULES]: {},
        [TINFO_SECTION.ERROR_STATS]: {},
        [TINFO_SECTION.LATENCY_STATS]: {},
        [TINFO_SECTION.CLUSTER]: {},
        [TINFO_SECTION.KEYSPACE]: {},
        [TINFO_SECTION.COMMAND_STATS]: {},
      },
    );

  return stage02Data;
}
