import getFlag from '@info/common/getFlag';
import IClusterInfo from '@info/interfaces/IClusterInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getClusterInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.CLUSTER];

  const clusterInfo: IClusterInfo = {
    cluster_enabled: getFlag(section.cluster_enabled),
  };

  return clusterInfo;
}
