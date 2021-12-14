const splitLines = (input: string) => input
  .split('\n')
  .filter((value) => value !== '');

const logTable = (table: (string | number)[][]) =>
  console.log(table.reduce((p, line) => p + '\n' + line.reduce((pLine, el) => `${pLine}${el}`, ''), ''));

const countLetters = (text: string) =>
  text
    .split('')
    .reduce((counter: Record<string, number>, letter) => {
      counter[letter] ? counter[letter]++ : (counter[letter] = 1);
      return counter;
    }, {});

function addToRecord<K extends keyof any>(record: Record<K, number>, element: K, times = 1): void {
  record[element] ? record[element] += times : record[element] = times;
}


export {
  splitLines,
  logTable,
  countLetters,
  addToRecord
}
