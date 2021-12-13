const splitLines = (input: string) => input
  .split('\n')
  .filter((value) => value !== '');

const logTable = (table: (string | number)[][]) =>
  console.log(table.reduce((p, line) => p + '\n' + line.reduce((pLine, el) => `${pLine}${el}`, ''), ''));

export {
  splitLines,
  logTable
}
