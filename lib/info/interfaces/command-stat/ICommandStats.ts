import ICommandStat from '@info/interfaces/command-stat/ICommandStat';

export default interface ICommandStats {
  [command: string]: ICommandStat;
}
