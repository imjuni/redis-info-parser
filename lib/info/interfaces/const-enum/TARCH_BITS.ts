export const TARCH_BITS = {
  32: 32,
  64: 64,
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/naming-convention
export type TARCH_BITS = typeof TARCH_BITS[keyof typeof TARCH_BITS];
