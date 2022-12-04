import InfoBlockBox from '@data/InfoBlockBox';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';

export default function parseStage1(info: string): Record<TINFO_SECTION, string[]> {
  const box: InfoBlockBox = info
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .reduce((aggregation, line) => {
      if (line.startsWith('#')) {
        aggregation.addInfoKey(line);
      } else {
        aggregation.addInfoLine(line);
      }

      return aggregation;
    }, new InfoBlockBox());

  box.close();

  return box.getInfos();
}
