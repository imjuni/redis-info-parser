import IBaseReplicationReplicaInfo from '@info/interfaces/replication/IBaseReplicationReplicaInfo';
import IReplicationReplicaLinkDownInfo from '@info/interfaces/replication/IReplicationReplicaLinkDownInfo';
import IReplicationReplicaLinkUpInfo from '@info/interfaces/replication/IReplicationReplicaLinkUpInfo';
import IReplicationReplicaSyncOffInfo from '@info/interfaces/replication/IReplicationReplicaSyncOffInfo';
import IReplicationReplicaSyncOnInfo from '@info/interfaces/replication/IReplicationReplicaSyncOnInfo';

type TReplicationReplicaInfo = IBaseReplicationReplicaInfo &
  (IReplicationReplicaSyncOnInfo | IReplicationReplicaSyncOffInfo) &
  (IReplicationReplicaLinkUpInfo | IReplicationReplicaLinkDownInfo);

export default TReplicationReplicaInfo;
