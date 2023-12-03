import { readFile } from "2023/utils/utils";

it("day1", () => {
  let input = readFile("day_1/input.txt");

  let group = "one|two|three|four|five|six|seven|eight|nine";

  let toto: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const replace = (line: string) => {
    var result = line;
    let startLetters = line.match(new RegExp(`^\\D*?(${group})`))
    if (startLetters) {
      // console.log(startLetters);
      let letter = startLetters[1];
      result = line.replace(letter, `${toto[letter]}`);
    }

    let lastLetters = line.match(new RegExp(`.*(${group})`));
    if (lastLetters) {
      // console.log(lastLetters);
      let letter = lastLetters[1];
      result = result.replaceAll(letter, `${toto[letter]}`);
    }

    return result
  };


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

  const result = input
    .map((l) => {
      let rep = replace(l);
      let extr = extractNumber(rep)
      // console.log(l, rep, extr);
      return extr
    })
    .reduceRight((previous, current) => previous + current, 0);

  console.log(result);
});
