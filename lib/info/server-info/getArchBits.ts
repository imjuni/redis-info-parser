import { TARCH_BITS } from '@info/interfaces/const-enum/TARCH_BITS';

export default function getArchBits(bits: string) {
  if (bits === `${TARCH_BITS[32]}`) {
    return TARCH_BITS[32];
  }

  return TARCH_BITS[64];
}
