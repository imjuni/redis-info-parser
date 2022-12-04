export default function getKeyValue(
  line: string,
  splitCharArg?: string,
): { key: string; value: string } {
  const splitChar = splitCharArg ?? '=';
  const [key, value] = line.split(splitChar).map((element) => element.trim());
  return { key, value };
}
