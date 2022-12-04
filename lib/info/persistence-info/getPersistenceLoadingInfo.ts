import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import IPersistenceLoadingOffInfo from '@info/interfaces/persistence/IPersistenceLoadingOffInfo';
import IPersistenceLoadingOnInfo from '@info/interfaces/persistence/IPersistenceLoadingOnInfo';
import parseStage2 from '@parser/parseStage2';

export default function getPersistenceLoadingInfo(
  section: ReturnType<typeof parseStage2>['Persistence'],
) {
  if (section.loading === TINFO_FLAG.ON) {
    const persistenceLoadingOnInfo: IPersistenceLoadingOnInfo = {
      loading: TINFO_FLAG.ON,
      loading_start_time: section.loading_start_time,
      loading_total_bytes: Number.parseInt(section.loading_total_bytes, 10),
      loading_rdb_used_mem: Number.parseInt(section.loading_rdb_used_mem, 10),
      loading_loaded_bytes: Number.parseInt(section.loading_loaded_bytes, 10),
      loading_loaded_perc: section.loading_loaded_perc,
      loading_eta_seconds: Number.parseInt(section.loading_eta_seconds, 10),
    };

    return persistenceLoadingOnInfo;
  }

  const persistenceLoadingOffInfo: IPersistenceLoadingOffInfo = {
    loading: TINFO_FLAG.OFF,
  };

  return persistenceLoadingOffInfo;
}
