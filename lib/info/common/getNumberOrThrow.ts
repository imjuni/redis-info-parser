export default function getNumberOrThrow(value?: string | null): number {
  if (value == null) {
    throw new Error(`empty value(${value}) entered getNumberOrThrow`);
  }

  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed)) {
    throw new Error(`empty value(${value}) entered getNumberOrThrow`);
  }

  return parsed;
}
