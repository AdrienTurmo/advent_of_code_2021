import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Day11 } from './Day11';
import { splitLines } from 'utils/Utils';

describe('<Day11 />', () => {
  it('should work', () => {

    const rawExampleInput = `
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`;

    const rawInput = `
5665114554
4882665427
6185582113
7762852744
7255621841
8842753123
8225372176
7212865827
7758751157
1828544563
`;

    const input = splitLines(rawInput)
      .map((value) => value.split('').map((value1) => Number.parseInt(value1)));

    let flashes = 0;
    const height = input.length;
    const length = input[0].length;

    const nextStep = () => {
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < length; j++) {
          input[i][j]++;
        }
      }
    };

    const lookForFlashes = () => {
      let hasFlashed = false;
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < length; j++) {
          if (input[i][j] >= 10) {
            hasFlashed = true;
            flashes++;
            input[i][j] = -length * height;
            if (input[i + 1]?.[j]) input[i + 1][j]++;
            if (input[i - 1]?.[j]) input[i - 1][j]++;
            if (input[i]?.[j + 1]) input[i][j + 1]++;
            if (input[i]?.[j - 1]) input[i][j - 1]++;
            if (input[i + 1]?.[j + 1]) input[i + 1][j + 1]++;
            if (input[i + 1]?.[j - 1]) input[i + 1][j - 1]++;
            if (input[i - 1]?.[j + 1]) input[i - 1][j + 1]++;
            if (input[i - 1]?.[j - 1]) input[i - 1][j - 1]++;
          }
        }
      }
      return hasFlashed;
    };

    // for (let i = 0; i < 100; i++) {
    //   nextStep();
    //   let hasFlashed = true;
    //   while (hasFlashed) {
    //     hasFlashed = lookForFlashes();
    //   }
    //
    //   let countFlashes = 0;
    //   for (let i = 0; i < height; i++) {
    //     for (let j = 0; j < length; j++) {
    //       if (Math.sign(input[i][j]) === -1) {
    //         input[i][j] = 0;
    //         countFlashes++;
    //       }
    //     }
    //   }
    // }

    let stepFlashSync = 0;
    let step = 0;
    while (stepFlashSync === 0) {
      step++;
      nextStep();
      let hasFlashed = true;
      while (hasFlashed) {
        hasFlashed = lookForFlashes();
      }

      let countFlashes = 0;
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < length; j++) {
          if (Math.sign(input[i][j]) === -1) {
            input[i][j] = 0;
            countFlashes++;
          }
        }
      }

      if (countFlashes === length * height) {
        stepFlashSync = step;
      }
    }

    console.log(stepFlashSync);
  });

});
