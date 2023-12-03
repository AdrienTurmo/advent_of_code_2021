import { readFile, sumNumber } from '2015/utils/utils';

it('day6', () => {
  const input = readFile('day_6/input.txt');

  const methods: Record<string, (n: number) => number> = {
    turn_on: () => 1,
    toggle: (n: number) => Math.abs(n - 1),
    turn_off: () => 0,
  };

  const grid: number[] = new Array(1000 * 1000);

  const truc = (l: string) => {
    const toto = l.replace('turn on', 'turn_on').replace('turn off', 'turn_off').replaceAll(',', ' ').split(' ');
    const verb = toto[0];
    const x1 = Number(toto[1]);
    const y1 = Number(toto[2]);
    const x2 = Number(toto[4]);
    const y2 = Number(toto[5]);

    const method = methods[verb];
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        grid[i + 1000 * j] = method(grid[i + 1000 * j] ?? 0);
      }
    }
  };

  input.forEach((l) => truc(l));

  const result = sumNumber(grid);

  console.log(result);
});

it('day6_2', () => {
  const input = readFile('day_6/input.txt');

  const methods: Record<string, (n: number) => number> = {
    turn_on: (n) => n + 1,
    toggle: (n) => n + 2,
    turn_off: (n) => Math.max(0, n - 1),
  };

  const grid: number[] = new Array(1000 * 1000);

  const truc = (l: string) => {
    const toto = l.replace('turn on', 'turn_on').replace('turn off', 'turn_off').replaceAll(',', ' ').split(' ');
    const verb = toto[0];
    const x1 = Number(toto[1]);
    const y1 = Number(toto[2]);
    const x2 = Number(toto[4]);
    const y2 = Number(toto[5]);

    const method = methods[verb];
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        grid[i + 1000 * j] = method(grid[i + 1000 * j] ?? 0);
      }
    }
  };

  input.forEach((l) => truc(l));

  const result = sumNumber(grid);

  console.log(result);
});
