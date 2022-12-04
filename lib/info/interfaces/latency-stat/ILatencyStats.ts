import ILatencyStat from '@info/interfaces/latency-stat/ILatencyStat';

export default interface ILatencyStats {
  [command: string]: ILatencyStat;
}
