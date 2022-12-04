export default interface ILatencyStat {
  sub?: string;
  p50: number;
  p99: number;
  'p99.9': number;
}
