export default interface ICommandStat {
  calls: number;
  usec: number;
  usec_per_call: number;
  rejected_calls: number;
  failed_calls: number;
}
