import IBasePersistenceInfo from '@info/interfaces/persistence/IBasePersistenceInfo';
import IPersistenceAOFOffInfo from '@info/interfaces/persistence/IPersistenceAOFOffInfo';
import IPersistenceAOFOnInfo from '@info/interfaces/persistence/IPersistenceAOFOnInfo';
import IPersistenceLoadingOffInfo from '@info/interfaces/persistence/IPersistenceLoadingOffInfo';
import IPersistenceLoadingOnInfo from '@info/interfaces/persistence/IPersistenceLoadingOnInfo';

type TPersistenceInfo = IBasePersistenceInfo &
  (IPersistenceAOFOnInfo | IPersistenceAOFOffInfo) &
  (IPersistenceLoadingOnInfo | IPersistenceLoadingOffInfo);

export default TPersistenceInfo;
