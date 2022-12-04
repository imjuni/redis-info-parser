import getKeyValue from '@info/common/getKeyValue';
import IKeyspaceInfo from '@info/interfaces/IKeyspaceInfo';
import IKeyspacesInfo from '@info/interfaces/IKeyspacesInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';
import { populate } from 'my-easy-fp';

export default function getKeyspacesInfo(
  stage02Data: ReturnType<typeof parseStage2>,
): IKeyspacesInfo {
  const section = stage02Data[TINFO_SECTION.KEYSPACE];

  const keyspacesInfo = Object.entries(section)
    .map(([key, value]) => ({ key, value }))
    .map<{ [key: string]: IKeyspaceInfo }>((entry) => {
      const [keyCountLine, expireCountLine, avgTtlLine] = entry.value
        .split(',')
        .map((db) => db.trim());

      const keyCount = getKeyValue(keyCountLine);
      const expireCount = getKeyValue(expireCountLine);
      const avgTtl = getKeyValue(avgTtlLine);

      return {
        [entry.key]: {
          keys: Number.parseInt(keyCount.value, 10),
          expires: Number.parseInt(expireCount.value, 10),
          avg_ttl: Number.parseInt(avgTtl.value, 10),
          reserved: true,
        } satisfies IKeyspaceInfo,
      };
    })
    .reduce((aggregation, db) => {
      return { ...aggregation, ...db };
    }, {});

  populate(15).forEach((index) => {
    if (keyspacesInfo[`db${index}`] == null) {
      keyspacesInfo[`db${index}`] = {
        keys: 0,
        expires: 0,
        avg_ttl: 0,
        reserved: false,
      } satisfies IKeyspaceInfo;
    }
  });

  return keyspacesInfo;
}
