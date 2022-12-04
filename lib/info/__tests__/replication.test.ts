import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import { TINFO_ROLE } from '@info/interfaces/const-enum/TINFO_ROLE';
import { TLINK_STATUS } from '@info/interfaces/const-enum/TLINK_STATUS';
import getReplicationReplicaInfo from '@info/replication-info/getReplicationReplicaInfo';
import getReplicationReplicaLinkInfo from '@info/replication-info/getReplicationReplicaLinkInfo';
import getReplicationReplicaSyncInfo from '@info/replication-info/getReplicationReplicaSyncInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

const casefile = [__dirname, '..', '..', '..', 'example', 'redis-info-sample01.txt'];

test('test getReplicationReplicaSyncInfo ON', async () => {
  const replicationReplicaSyncInfo = getReplicationReplicaSyncInfo({
    master_sync_in_progress: TINFO_FLAG.ON,
    master_sync_left_bytes: '3344',
    master_sync_last_io_seconds_ago: '123',
  });

  expect(replicationReplicaSyncInfo).toMatchObject({
    master_sync_in_progress: TINFO_FLAG.ON,
    master_sync_left_bytes: '3344',
    master_sync_last_io_seconds_ago: '123',
  });
});

test('test getReplicationReplicaSyncInfo OFF', async () => {
  const replicationReplicaSyncInfo = getReplicationReplicaSyncInfo({
    master_sync_in_progress: TINFO_FLAG.OFF,
    master_sync_left_bytes: '3344',
    master_sync_last_io_seconds_ago: '123',
  });

  expect(replicationReplicaSyncInfo).toMatchObject({
    master_sync_in_progress: TINFO_FLAG.OFF,
  });
});

test('test getReplicationReplicaLinkInfo UP', async () => {
  const replicationReplicaLinkInfo = getReplicationReplicaLinkInfo({
    master_link_status: TLINK_STATUS.UP,
  });

  expect(replicationReplicaLinkInfo).toMatchObject({
    master_link_status: TLINK_STATUS.UP,
  });
});

test('test getReplicationReplicaLinkInfo DOWN', async () => {
  const replicationReplicaLinkInfo = getReplicationReplicaLinkInfo({
    master_link_status: TLINK_STATUS.DOWN,
    master_link_down_since_seconds: '993399',
  });

  expect(replicationReplicaLinkInfo).toMatchObject({
    master_link_status: TLINK_STATUS.DOWN,
    master_link_down_since_seconds: '993399',
  });
});

test('test getReplicationReplicaInfo Master', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case007.json'));
  const parsed = parseStage2(parseStage1(infoStr));

  const replicationReplicaInfo = getReplicationReplicaInfo(parsed.Replication);

  expect(replicationReplicaInfo).toMatchObject(expectData);
});

test('test getReplicationReplicaInfo Slave', async () => {
  const infoStr = await loadExpect(...casefile);
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case008.json'));
  const parsed = parseStage2(parseStage1(infoStr));

  const data = {
    ...parsed.Replication,
    role: TINFO_ROLE.SLAVE,
    master_host: 'http://localhost',
    master_port: '6379',
    master_last_io_seconds_ago: '1234444',
    slave_repl_offset: '1234',
    slave_priority: '1',
    slave_read_only: TINFO_FLAG.ON,
    connected_slaves: '3',
    min_slaves_good_slaves: 'asdf',
  };

  const replicationReplicaInfo = getReplicationReplicaInfo(data);

  expect(replicationReplicaInfo).toMatchObject(expectData);
});
