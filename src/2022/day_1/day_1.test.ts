import { readFile } from '2015/utils/utils';

it('day1', () => {
  let input = readFile('day_1/input.txt');

  let result = 0;

  for (const char of input) {
    if (char === '(')
      result++
    else
      result--
  }

  console.log(result);
});


