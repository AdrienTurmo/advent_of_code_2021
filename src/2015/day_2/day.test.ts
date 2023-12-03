import { readFile, sumNumber } from '2015/utils/utils';

it('day2', () => {
  let input = readFile('day_2/input.txt');

  const paperArea = (line: string) => {
    const [l, w, h] = line.split('x').map((n) => Number(n));
    const a1 = l * w;
    const a2 = l * h;
    const a3 = w * h;

    return 2 * a1 + 2 * a2 + 2 * a3 + Math.min(a1, a2, a3);
  };

  const result = sumNumber(input.map((l) => paperArea(l)));

  console.log(result);
});

it('day2_2', () => {
  let input = readFile('day_2/input.txt');

  const ribbonLength = (line: string) => {
    const [l, w, h] = line.split('x').map((n) => Number(n));
    const p1 = l + w;
    const p2 = l + h;
    const p3 = w + h;

    return 2 * Math.min(p1, p2, p3) + l * w * h;
  };

  const result = sumNumber(input.map((l) => ribbonLength(l)));

  console.log(result);
});
