import { TINFO_FLAG } from '@info/interfaces/const-enum/TINFO_FLAG';

export default interface IBaseReplicationInfo {
  connected_slaves: string;
  master_replid: string;
  master_replid2: string;
  master_repl_offset: string;
  second_repl_offset: string;
  repl_backlog_active: TINFO_FLAG;
  repl_backlog_size: string;
  repl_backlog_first_byte_offset: string;
  repl_backlog_histlen: string;
}
