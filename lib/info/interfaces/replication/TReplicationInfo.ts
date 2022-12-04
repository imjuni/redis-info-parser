import IBaseReplicationInfo from '@info/interfaces/replication/IBaseReplicationInfo';
import IReplicationMasterInfo from '@info/interfaces/replication/IReplicationMasterInfo';
import TReplicationReplicaInfo from '@info/interfaces/replication/IReplicationReplicaInfo';

type TReplicationInfo = IBaseReplicationInfo & (IReplicationMasterInfo | TReplicationReplicaInfo);

export default TReplicationInfo;
