import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('<Day6 />', () => {
  it('should work', () => {
    // const rawExampleInputs = '3,4,3,1,2';
    const rawInputs =
      '1,1,1,1,2,1,1,4,1,4,3,1,1,1,1,1,1,1,1,4,1,3,1,1,1,5,1,3,1,4,1,2,1,1,5,1,1,1,1,1,1,1,1,1,1,3,4,1,5,1,1,1,1,1,1,1,1,1,3,1,4,1,1,1,1,3,5,1,1,2,1,1,1,1,4,4,1,1,1,4,1,1,4,2,4,4,5,1,1,1,1,2,3,1,1,4,1,5,1,1,1,3,1,1,1,1,5,5,1,2,2,2,2,1,1,2,1,1,1,1,1,3,1,1,1,2,3,1,5,1,1,1,2,2,1,1,1,1,1,3,2,1,1,1,4,3,1,1,4,1,5,4,1,4,1,1,1,1,1,1,1,1,1,1,2,2,4,5,1,1,1,1,5,4,1,3,1,1,1,1,4,3,3,3,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,5,1,3,1,4,3,1,3,1,5,1,1,1,1,3,1,5,1,2,4,1,1,4,1,4,4,2,1,2,1,3,3,1,4,4,1,1,3,4,1,1,1,2,5,2,5,1,1,1,4,1,1,1,1,1,1,3,1,5,1,2,1,1,1,1,1,4,4,1,1,1,5,1,1,5,1,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,3,2,4,1,1,2,1,1,3,2';

    const fishes: number[] = rawInputs.split(',').map((value) => Number.parseInt(value));

    const fichesCount = new Map<number, number>([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
    ]);
    fishes.forEach((fish) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fichesCount.set(fish, fichesCount.get(fish) + 1);
    });
    // console.log(fichesCount);

    for (let i = 0; i < 256; i++) {
      const nb0 = fichesCount.get(0) || 0;

      fichesCount.set(0, fichesCount.get(1) || 0);
      fichesCount.set(1, fichesCount.get(2) || 0);
      fichesCount.set(2, fichesCount.get(3) || 0);
      fichesCount.set(3, fichesCount.get(4) || 0);
      fichesCount.set(4, fichesCount.get(5) || 0);
      fichesCount.set(5, fichesCount.get(6) || 0);
      fichesCount.set(6, (fichesCount.get(7) || 0) + nb0);
      fichesCount.set(7, fichesCount.get(8) || 0);
      fichesCount.set(8, nb0);

      // console.log(fichesCount);
    }

    console.log(fichesCount);

    console.log(Array.from(fichesCount.values()).reduce((previousValue, currentValue) => previousValue + currentValue, 0));
  });

});
