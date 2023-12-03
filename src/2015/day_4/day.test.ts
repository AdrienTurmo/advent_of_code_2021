import { readFile, sumNumber } from '2015/utils/utils';
import { md5 } from 'js-md5';

it('day4', () => {
  const input = readFile('day_4/input.txt')[0];

  let index = 0
  let hash = ""

  while (!hash.startsWith("000000")) {
    index++
    hash = md5(`${input}${index}`)
  }

  console.log(index)
});
