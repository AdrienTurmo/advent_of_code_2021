import { readFile, sumNumber } from '2015/utils/utils';

it('day5', () => {
  const input = readFile('day_5/input.txt');

  const voyels = /((.*[aeiou]){3,})/
  const double = /(?<toto>\w)(\k<toto>)/
  const exclude = /(ab)+|(cd)+|(pq)+|(xy)+/

  const result = input
    .filter(l => {
      return l.match(voyels) && l.match(double) && !l.match(exclude)
    })

  // console.log(result);
  console.log(result.length);
});

it('day5_2', () => {
  const input = readFile('day_5/input.txt');

  const double = /(?<toto>\w{2}).*(\k<toto>)/
  const letter = /(?<toto>\w).(\k<toto>)/

  const result = input
    .filter(l => {
      return l.match(double) && l.match(letter)
    })

  // console.log(result);
  console.log(result.length);
});
