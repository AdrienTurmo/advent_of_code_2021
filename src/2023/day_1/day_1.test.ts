import { readFile } from '2023/utils/utils';

it('day1', () => {
  let input = readFile('day_1/input.txt');

  let patternMultipleNumbers = /^\D*(\d).*(\d)\D*$/;
  let patternOneNumber = /(\d)/;

  const extractNumber = (line: string): number => {
    let matchMultiple = line.match(patternMultipleNumbers);
    let match1 = line.match(patternOneNumber);
    if (matchMultiple) {
      return Number(matchMultiple[1]) * 10 + Number(matchMultiple[2]);
    } else if (match1) {
      return Number(match1[0]) * 10 + Number(match1[0]);
    }
    return 0;
  };

  const result = input.map((l) => extractNumber(l)).reduceRight((previous, current) => previous + current, 0);

  console.log(result);
});
