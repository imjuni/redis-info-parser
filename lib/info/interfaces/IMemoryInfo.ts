import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IMemoryInfo<T extends number | BigInt = number> {
  used_memory: T;
  used_memory_human: string;
  used_memory_rss: T;
  used_memory_rss_human: string;
  used_memory_peak: T;
  used_memory_peak_human: string;
  used_memory_peak_perc: string;
  used_memory_overhead: T;
  used_memory_startup: T;
  used_memory_dataset: T;
  used_memory_dataset_perc: string;
  allocator_allocated: T;
  allocator_active: T;
  allocator_resident: T;
  total_system_memory: T;
  total_system_memory_human: string;
  used_memory_lua: T;
  used_memory_lua_human: string;
  maxmemory: T;
  maxmemory_human: string;
  maxmemory_policy: string;
  allocator_frag_ratio: string;
  allocator_frag_bytes: T;
  allocator_rss_ratio: string;
  allocator_rss_bytes: string;
  rss_overhead_ratio: string;
  rss_overhead_bytes: T;
  mem_fragmentation_ratio: string;
  mem_fragmentation_bytes: T;
  mem_allocator: string;
  active_defrag_running: TINFO_FLAG;
  lazyfree_pending_objects: string;

  // Added
  mem_not_counted_for_evict: T;
  mem_replication_backlog: T;
  mem_total_replication_buffers: T;
  mem_clients_slaves: T;
  mem_clients_normal: T;
  mem_cluster_links: T;
  mem_aof_buffer: T;
  lazyfreed_objects: T;
  used_memory_scripts_eval: T;
  number_of_cached_scripts: T;
  number_of_functions: T;
  number_of_libraries: T;
  used_memory_vm_functions: T;
  used_memory_vm_total: T;
  used_memory_vm_total_human: string;
  used_memory_functions: T;
  used_memory_scripts: T;
  used_memory_scripts_human: string;
}
