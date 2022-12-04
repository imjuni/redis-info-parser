import InfoBlock from '@data/InfoBlock';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';

export default class InfoBlockBox {
  #infos: InfoBlock[];

  #current: InfoBlock;

  constructor() {
    this.#infos = [];
    this.#current = new InfoBlock(TINFO_SECTION.UNKNOWN);
  }

  addInfoKey(key: string) {
    this.#infos.push(this.#current);
    this.#current = new InfoBlock(key);
  }

  addInfoLine(line: string) {
    this.#current.append(line);
  }

  close() {
    this.#infos.push(this.#current);
  }

  getInfos() {
    const sections = [
      TINFO_SECTION.UNKNOWN,
      TINFO_SECTION.PERSISTENCE,
      TINFO_SECTION.SERVER,
      TINFO_SECTION.CLIENTS,
      TINFO_SECTION.STATS,
      TINFO_SECTION.MEMORY,
      TINFO_SECTION.REPLICATION,
      TINFO_SECTION.CPU,
      TINFO_SECTION.MODULES,
      TINFO_SECTION.ERROR_STATS,
      TINFO_SECTION.CLUSTER,
      TINFO_SECTION.KEYSPACE,
      TINFO_SECTION.COMMAND_STATS,
      TINFO_SECTION.LATENCY_STATS,
    ];

    return this.#infos.reduce<Record<TINFO_SECTION, string[]>>(
      (aggregation, info) => {
        if (sections.some((section) => section === info.title)) {
          return { ...aggregation, [info.title]: info.lines };
        }

        return { ...aggregation, [TINFO_SECTION.UNKNOWN]: info.lines };
      },
      {
        [TINFO_SECTION.UNKNOWN]: [],
        [TINFO_SECTION.PERSISTENCE]: [],
        [TINFO_SECTION.SERVER]: [],
        [TINFO_SECTION.CLIENTS]: [],
        [TINFO_SECTION.STATS]: [],
        [TINFO_SECTION.MEMORY]: [],
        [TINFO_SECTION.REPLICATION]: [],
        [TINFO_SECTION.CPU]: [],
        [TINFO_SECTION.MODULES]: [],
        [TINFO_SECTION.ERROR_STATS]: [],
        [TINFO_SECTION.CLUSTER]: [],
        [TINFO_SECTION.KEYSPACE]: [],
        [TINFO_SECTION.COMMAND_STATS]: [],
        [TINFO_SECTION.LATENCY_STATS]: [],
      },
    );
  }
}
