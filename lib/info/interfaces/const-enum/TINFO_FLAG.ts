export const TINFO_FLAG = {
  ON: '1',
  OFF: '0',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TINFO_FLAG = typeof TINFO_FLAG[keyof typeof TINFO_FLAG];
