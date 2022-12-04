/* eslint-disable no-unneeded-ternary */
import getBigInt from '@info/common/getBigInt';
import getFlag from '@info/common/getFlag';
import IMemoryInfo from '@info/interfaces/IMemoryInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

function getMemoryInfo<T extends boolean | undefined>(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigInt?: T,
): T extends true ? IMemoryInfo<BigInt> : IMemoryInfo<number>;
function getMemoryInfo(
  stage02Data: ReturnType<typeof parseStage2>,
  useBigInt?: boolean,
): IMemoryInfo<BigInt | number> {
  const section = stage02Data[TINFO_SECTION.MEMORY];

  const memoryInfo: IMemoryInfo<number | BigInt> = {
    used_memory: getBigInt(section.used_memory, useBigInt),
    used_memory_human: section.used_memory_human,
    used_memory_rss: getBigInt(section.used_memory_rss, useBigInt),
    used_memory_rss_human: section.used_memory_rss_human,
    used_memory_peak: getBigInt(section.used_memory_peak, useBigInt),
    used_memory_peak_human: section.used_memory_peak_human,
    used_memory_peak_perc: section.used_memory_peak_perc,
    used_memory_overhead: getBigInt(section.used_memory_overhead, useBigInt),
    used_memory_startup: getBigInt(section.used_memory_startup, useBigInt),
    used_memory_dataset: getBigInt(section.used_memory_dataset, useBigInt),
    used_memory_dataset_perc: section.used_memory_dataset_perc,
    allocator_allocated: getBigInt(section.allocator_allocated, useBigInt),
    allocator_active: getBigInt(section.allocator_active, useBigInt),
    allocator_resident: getBigInt(section.allocator_resident, useBigInt),
    total_system_memory: getBigInt(section.total_system_memory, useBigInt),
    total_system_memory_human: section.total_system_memory_human,
    used_memory_lua: getBigInt(section.used_memory_lua, useBigInt),
    used_memory_lua_human: section.used_memory_lua_human,
    maxmemory: getBigInt(section.maxmemory, useBigInt),
    maxmemory_human: section.maxmemory_human,
    maxmemory_policy: section.maxmemory_policy,
    allocator_frag_ratio: section.allocator_frag_ratio,
    allocator_frag_bytes: getBigInt(section.allocator_frag_bytes, useBigInt),
    allocator_rss_ratio: section.allocator_rss_ratio,
    allocator_rss_bytes: section.allocator_rss_bytes,
    rss_overhead_ratio: section.rss_overhead_ratio,
    rss_overhead_bytes: getBigInt(section.rss_overhead_bytes, useBigInt),
    mem_fragmentation_ratio: section.mem_fragmentation_ratio,
    mem_fragmentation_bytes: getBigInt(section.mem_fragmentation_bytes, useBigInt),
    mem_allocator: section.mem_allocator,
    active_defrag_running: getFlag(section.active_defrag_running),
    lazyfree_pending_objects: section.lazyfree_pending_objects,

    mem_not_counted_for_evict: getBigInt(section.mem_not_counted_for_evict, useBigInt),
    mem_replication_backlog: getBigInt(section.mem_replication_backlog, useBigInt),
    mem_total_replication_buffers: getBigInt(section.mem_total_replication_buffers, useBigInt),
    mem_clients_slaves: getBigInt(section.mem_clients_slaves, useBigInt),
    mem_clients_normal: getBigInt(section.mem_clients_normal, useBigInt),
    mem_cluster_links: getBigInt(section.mem_cluster_links, useBigInt),
    mem_aof_buffer: getBigInt(section.mem_aof_buffer, useBigInt),
    lazyfreed_objects: getBigInt(section.lazyfreed_objects, useBigInt),
    used_memory_scripts_eval: getBigInt(section.used_memory_scripts_eval, useBigInt),
    number_of_cached_scripts: getBigInt(section.number_of_cached_scripts, useBigInt),
    number_of_functions: getBigInt(section.number_of_functions, useBigInt),
    number_of_libraries: getBigInt(section.number_of_libraries, useBigInt),
    used_memory_vm_functions: getBigInt(section.used_memory_vm_functions, useBigInt),
    used_memory_vm_total: getBigInt(section.used_memory_vm_total, useBigInt),
    used_memory_vm_total_human: section.used_memory_vm_total_human,
    used_memory_functions: getBigInt(section.used_memory_functions, useBigInt),
    used_memory_scripts: getBigInt(section.used_memory_scripts, useBigInt),
    used_memory_scripts_human: section.used_memory_scripts_human,
  };

  return memoryInfo;
}

export default getMemoryInfo;
