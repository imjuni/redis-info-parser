export const TREDIS_MODE = {
  STANDALONE: 'standalone',
  SENTINEL: 'sentinel',
  CLUSTER: 'cluster',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TREDIS_MODE = typeof TREDIS_MODE[keyof typeof TREDIS_MODE];
