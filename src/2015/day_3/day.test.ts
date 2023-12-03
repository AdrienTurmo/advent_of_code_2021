import { readFile, sumNumber } from '2015/utils/utils';

it('day3', () => {
  const input = readFile('day_3/input.txt')[0];

  let start1 = [input.length, input.length]
  let start2 = [input.length, input.length]
  let houses: Set<number>[] = []
  houses[input.length] = new Set<number>([input.length])

  let turn = 0

  const move = (char: string) => {
    switch (char) {
      case "^" :
        turn === 0 ? start1[0]++ : start2[0]++
        break
      case "v" :
         turn === 0 ? start1[0]-- : start2[0]--
        break
      case "<":
         turn === 0 ? start1[1]-- : start2[1]--
        break
      default:
         turn === 0 ? start1[1]++ : start2[1]++
        break
    }

    houses[start1[0]] ? houses[start1[0]].add(start1[1]) : houses[start1[0]] = new Set([start1[1]])
    houses[start2[0]] ? houses[start2[0]].add(start2[1]) : houses[start2[0]] = new Set([start2[1]])

    turn = turn === 0 ? 1 : 0
  }

  input.split('').forEach(c => move(c))

  console.log(houses);

  const result = sumNumber(houses.map(t =>  t.size))

  console.log(result);
});
