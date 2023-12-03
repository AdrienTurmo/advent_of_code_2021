import { readFile, sumNumber } from '2023/utils/utils';

interface ValueNumber {
  value: string;
  line: number;
  start: number;
}

it('day3', () => {
  let input = readFile('day_3/input.txt');

  let valuesNumbers: ValueNumber[] = []

  let extractValue = (line: string, index: number) => {
    let data = line.matchAll(/(\d+)/g);
    var tata = data.next();

    while (!tata.done) {
      let valueNumber: ValueNumber = {
        value: tata.value[0],
        line: index,
        start: tata.value.index ?? 0
      }
      valuesNumbers.push(valueNumber)
      tata = data.next()
    }
  }

  input.forEach((l, index) => extractValue(l, index))

  const isNearSymbol = (valueNumber: ValueNumber) => {
    let toto =
      ((input[valueNumber.line - 1] ?? '').substring(valueNumber.start - 1, valueNumber.start + valueNumber.value.length +1)
      + input[valueNumber.line].substring(valueNumber.start - 1, valueNumber.start + valueNumber.value.length +1)
      + (input[valueNumber.line + 1] ?? '').substring(valueNumber.start - 1, valueNumber.start + valueNumber.value.length + 1))
        .replaceAll('.', '0')

    return toto.match(/\D/)
  }

  let result = sumNumber(
    valuesNumbers
      .filter(v => isNearSymbol(v))
      .map(v => Number(v.value))
  );

  console.log(result)

});
