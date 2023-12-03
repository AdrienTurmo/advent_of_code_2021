import { readFile } from '2015/utils/utils';

it('day2', () => {
  let input = readFile('day_1/input.txt')[0];

  let result = 0;

  for (const char of input) {
    if (char === '(')
      result++
    else
      result--
  }

  console.log(result);
});

it('day2', () => {
  let input = readFile('day_1/input.txt')[0];

  let result = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(')
      result++
    else
      result--

    if (result <= -1) {
      console.log(i+1);
      break;
    }
  }

});

