export const TINFO_ROLE = {
  MASTER: 'master',
  SLAVE: 'slave',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TINFO_ROLE = typeof TINFO_ROLE[keyof typeof TINFO_ROLE];
