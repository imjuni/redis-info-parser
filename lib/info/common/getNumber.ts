export default function getNumber(value?: string | null): number | undefined {
  if (value == null) {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed)) {
    return undefined;
  }

  return parsed;
}
