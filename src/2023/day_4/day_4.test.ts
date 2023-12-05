import { readFile, sumNumber } from '2023/utils/utils';

it('day4', () => {
  let input = readFile('day_4/input.txt');

  const getPoints = (line: string) => {
    const interesting = line.split(': ')[1].split(' | ');

    const winningNumbers = interesting[0]
      .split(' ')
      .filter((l) => l.length > 0 && l !== ' ')
      .map((n) => Number(n));
    const numbers = interesting[1]
      .split(' ')
      .filter((l) => l.length > 0 && l !== ' ')
      .map((n) => Number(n));

    const numbersGotten = numbers.filter((n) => winningNumbers.includes(n)).length;

    return numbersGotten === 0 ? 0 : 2 ** (numbersGotten - 1);
  };

  const result = sumNumber(input.map((l) => getPoints(l)));
  console.log(result);
});

it('day4_2', () => {
  let input = readFile('day_4/input.txt');

  const getPoints = (line: string) => {
    const interesting = line.split(': ')[1].split(' | ');

    const winningNumbers = interesting[0]
      .split(' ')
      .filter((l) => l.length > 0 && l !== ' ')
      .map((n) => Number(n));
    const numbers = interesting[1]
      .split(' ')
      .filter((l) => l.length > 0 && l !== ' ')
      .map((n) => Number(n));

    return numbers.filter((n) => winningNumbers.includes(n)).length;
  };

  const pointsByCards = input.map((l) => getPoints(l));

  const nbOfCards: number[] = []

  let numberOfStartingCards = input.length;


  for (let i = 0; i < numberOfStartingCards; i++) {
    nbOfCards[i] = 1
  }

  for (let i = 0; i < numberOfStartingCards; i++) {
    const points = pointsByCards[i]
    for (let j = i + 1; j <= Math.min(i + points, numberOfStartingCards-1); j++) {
      nbOfCards[j] += nbOfCards[i]
    }
  }

  const result = sumNumber(nbOfCards)
  console.log(result);
});
