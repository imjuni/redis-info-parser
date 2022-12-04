# redis-info-parser

Redis info string parser

## install

```sh
npm install redis-info-parser
```

## Usage

```ts
// sample.mjs
import ioredis from 'ioredis';
import getRedisInfo from 'redis-info-parser';

const redis = new ioredis(6379, 'localhost');
const infoStr = await redis.info();
const info = getRedisInfo(infoStr);

console.log(info.Keyspace);

redis.disconnect();
```
