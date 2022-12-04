import getPersistenceInfo from '@info/getPersistenceInfo';
import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';
import getPersistenceAOFInfo from '@info/persistence-info/getPersistenceAOFInfo';
import getPersistenceLoadingInfo from '@info/persistence-info/getPersistenceLoadingInfo';
import parseStage1 from '@parser/parseStage1';
import parseStage2 from '@parser/parseStage2';
import loadExpect from '@tools/__tests__/test-tools/loadExpect';
import 'jest';

test('test getPersistenceAOFInfo ON aof_rewrite_buffer_length undefined', async () => {
  const info = getPersistenceAOFInfo({
    aof_enabled: TINFO_FLAG.ON,
    aof_pending_rewrite: TINFO_FLAG.ON,
    aof_current_size: '172497',
    aof_base_size: '0',
    aof_buffer_length: '0',
    aof_pending_bio_fsync: '0',
    aof_delayed_fsync: '0',
  });

  const expectData = {
    aof_enabled: '1',
    aof_current_size: 172497,
    aof_base_size: 0,
    aof_pending_rewrite: '1',
    aof_buffer_length: 0,
    aof_pending_bio_fsync: '0',
    aof_delayed_fsync: '0',
  };

  expect(info).toMatchObject(expectData);
});

test('test getPersistenceAOFInfo ON, aof_rewrite_buffer_length fine', async () => {
  const info = getPersistenceAOFInfo({
    aof_enabled: TINFO_FLAG.ON,
    aof_pending_rewrite: TINFO_FLAG.ON,
    aof_rewrite_buffer_length: '123',
    aof_current_size: '172497',
    aof_base_size: '0',
    aof_buffer_length: '0',
    aof_pending_bio_fsync: '0',
    aof_delayed_fsync: '0',
  });

  const expectData = {
    aof_enabled: '1',
    aof_current_size: 172497,
    aof_base_size: 0,
    aof_pending_rewrite: '1',
    aof_buffer_length: 0,
    aof_pending_bio_fsync: '0',
    aof_delayed_fsync: '0',
  };

  expect(info).toMatchObject(expectData);
});

test('test getPersistenceAOFInfo OFF', async () => {
  const info = getPersistenceAOFInfo({
    aof_enabled: TINFO_FLAG.OFF,
  });

  const expectData = {
    aof_enabled: '0',
  };

  expect(info).toMatchObject(expectData);
});

test('test getPersistenceLoadingInfo ON', async () => {
  const info = getPersistenceLoadingInfo({
    loading: TINFO_FLAG.ON,
    loading_start_time: '1668943218',
    loading_total_bytes: '1234',
    loading_rdb_used_mem: '1234',
    loading_loaded_bytes: '1234',
    loading_loaded_perc: '10.10%',
    loading_eta_seconds: '1234',
  });

  const expectData = {
    loading_start_time: '1668943218',
    loading_total_bytes: 1234,
    loading_rdb_used_mem: 1234,
    loading_loaded_bytes: 1234,
    loading_loaded_perc: '10.10%',
    loading_eta_seconds: 1234,
  };

  expect(info).toMatchObject(expectData);
});

test('test getPersistenceLoadingInfo OFF', async () => {
  const info = getPersistenceLoadingInfo({
    loading: TINFO_FLAG.OFF,
  });

  const expectData = {
    loading: '0',
  };

  expect(info).toMatchObject(expectData);
});

test('test getPersistenceInfo', async () => {
  const infoStr = await loadExpect(
    __dirname,
    '..',
    '..',
    '..',
    'example',
    'redis-info-sample01.txt',
  );
  const expectData = JSON.parse(await loadExpect(__dirname, 'expect', 'case005.json'));

  const parsed = parseStage2(parseStage1(infoStr));

  const persistenceInfo = getPersistenceInfo(parsed);
  expect(persistenceInfo).toMatchObject(expectData);
});
