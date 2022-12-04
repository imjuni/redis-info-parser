import getFlag from '@info/common/getFlag';
import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import IPersistenceAOFOffInfo from '@info/interfaces/persistence/IPersistenceAOFOffInfo';
import IPersistenceAOFOnInfo from '@info/interfaces/persistence/IPersistenceAOFOnInfo';
import parseStage2 from '@parser/parseStage2';

export default function getPersistenceAOFInfo(
  section: ReturnType<typeof parseStage2>['Persistence'],
) {
  if (section.aof_enabled === TINFO_FLAG.ON) {
    const aofRewriteBufferLength = Number.parseInt(section.aof_rewrite_buffer_length, 10);
    const persistenceAOFOnInfo: IPersistenceAOFOnInfo = {
      aof_enabled: TINFO_FLAG.ON,
      aof_current_size: Number.parseInt(section.aof_current_size, 10),
      aof_base_size: Number.parseInt(section.aof_base_size, 10),
      aof_pending_rewrite: getFlag(section.aof_pending_rewrite),
      aof_buffer_length: Number.parseInt(section.aof_buffer_length, 10),
      aof_rewrite_buffer_length: Number.isNaN(aofRewriteBufferLength)
        ? undefined
        : aofRewriteBufferLength,
      aof_pending_bio_fsync: section.aof_pending_bio_fsync,
      aof_delayed_fsync: section.aof_delayed_fsync,
    };
    return persistenceAOFOnInfo;
  }

  const persistenceAOFOffInfo: IPersistenceAOFOffInfo = {
    aof_enabled: TINFO_FLAG.OFF,
  };

  return persistenceAOFOffInfo;
}
