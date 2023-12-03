import fs from "fs";

export const readFile = (fileName: string) => (fs.readFileSync(`src/2023/${fileName}`, 'utf8') as string)
  .split('\n')
  .filter(l => l.length > 0)

export const sumNumber = (array: number[]) => array.reduceRight((previous, current) => previous + current, 0)
