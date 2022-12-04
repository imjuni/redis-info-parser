import fs from 'fs';
import path from 'path';

export default async function loadExpect(...filePaths: string[]): Promise<string> {
  const filePath = path.join(...filePaths);
  const buf = await fs.promises.readFile(filePath);
  const raw = buf.toString();
  return raw;
}
