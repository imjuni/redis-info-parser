import getFlag from '@info/common/getFlag';
import IBasePersistenceInfo from '@info/interfaces/persistence/IBasePersistenceInfo';
import TPersistenceInfo from '@info/interfaces/persistence/TPersistenceInfo';
import getPersistenceAOFInfo from '@info/persistence-info/getPersistenceAOFInfo';
import getPersistenceLoadingInfo from '@info/persistence-info/getPersistenceLoadingInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getPersistenceInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.PERSISTENCE];

  const basePersistenceInfo: IBasePersistenceInfo = {
    rdb_changes_since_last_save: section.rdb_changes_since_last_save,
    rdb_bgsave_in_progress: getFlag(section.rdb_bgsave_in_progress),
    rdb_last_save_time: section.rdb_last_save_time,
    rdb_last_bgsave_status: section.rdb_last_bgsave_status,
    rdb_last_bgsave_time_sec: section.rdb_last_bgsave_time_sec,
    rdb_current_bgsave_time_sec: section.rdb_current_bgsave_time_sec,
    rdb_last_cow_size: section.rdb_last_cow_size,
    aof_rewrite_in_progress: getFlag(section.aof_rewrite_in_progress),
    aof_rewrite_scheduled: getFlag(section.aof_rewrite_scheduled),
    aof_last_rewrite_time_sec: section.aof_last_rewrite_time_sec,
    aof_current_rewrite_time_sec: section.aof_current_rewrite_time_sec,
    aof_last_bgrewrite_status: section.aof_last_bgrewrite_status,
    aof_last_write_status: section.aof_last_write_status,
    aof_last_cow_size: section.aof_last_cow_size,
  };

  const persistenceAOFInfo = getPersistenceAOFInfo(section);
  const persistenceLoadingInfo = getPersistenceLoadingInfo(section);

  const persistenceInfo: TPersistenceInfo = {
    ...basePersistenceInfo,
    ...persistenceAOFInfo,
    ...persistenceLoadingInfo,
  };

  return persistenceInfo;
}
