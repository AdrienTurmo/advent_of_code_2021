import { readFile } from '2023/utils/utils';

it('day2', () => {
  let input = readFile('day_2/input.txt');

  let maxs: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14
  }

  const split = (line: string) => line
    .replace(':', ";")
    .replaceAll(',', ";")
    .split(';')
    .map((l) => l.trim())

  const analyse = (line: string) => {
    let splitted = split(line)
    let gameIndex = Number(splitted[0].split(' ')[1])
    for (let i = 1; i< splitted.length; i++) {
      let toto = splitted[i].split(' ')
      if (maxs[toto[1]] < Number(toto[0])) return 0
    }

    return gameIndex
  }

  let result = input
    .map((l) => analyse(l))
    .reduceRight((previous, current) => previous + current, 0);

  console.log(result);
});

it('day2_part2', () => {
  let input = readFile('day_2/input.txt');

  const split = (line: string) => line
    .replace(':', ";")
    .replaceAll(',', ";")
    .split(';')
    .map((l) => l.trim())

  const analyse = (line: string) => {
    let maxs: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0
    }

    let splitted = split(line)
    for (let i = 1; i < splitted.length; i++) {
      let toto = splitted[i].split(' ')
      maxs[toto[1]] = Math.max(Number(toto[0]), maxs[toto[1]])
    }

    return maxs.red * maxs.blue * maxs.green
  }

  let result = input
    .map((l) => analyse(l))
    .reduceRight((previous, current) => previous + current, 0);

  console.log(result);
});
