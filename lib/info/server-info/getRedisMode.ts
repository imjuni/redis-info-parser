import { TREDIS_MODE } from '@info/interfaces/const-enum/TREDIS_MODE';

export default function getRedisMode(mode: string) {
  if (mode === TREDIS_MODE.CLUSTER) {
    return TREDIS_MODE.CLUSTER;
  }

  if (mode === TREDIS_MODE.SENTINEL) {
    return TREDIS_MODE.SENTINEL;
  }

  return TREDIS_MODE.STANDALONE;
}
