import IErrorStat from '@info/interfaces/error-stat/IErrorStat';

export default interface IErrorStats {
  [group: string]: IErrorStat;
}
