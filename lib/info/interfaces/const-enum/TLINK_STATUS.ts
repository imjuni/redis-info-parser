export const TLINK_STATUS = {
  UP: 'up',
  DOWN: 'down',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TLINK_STATUS = typeof TLINK_STATUS[keyof typeof TLINK_STATUS];
