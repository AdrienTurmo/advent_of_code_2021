import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('<Day12 />', () => {
  it('should work', () => {
    const rawExampleInput1 = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`;
    const rawExampleInput2 = `
dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`;
    const rawExampleInput3 = `
fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`;

    const rawInput = `
qi-UD
jt-br
wb-TF
VO-aa
UD-aa
br-end
end-HA
qi-br
br-HA
UD-start
TF-qi
br-hf
VO-hf
start-qi
end-aa
hf-HA
hf-UD
aa-hf
TF-hf
VO-start
wb-aa
UD-wb
KX-wb
qi-VO
br-TF
`;

    const inputs = rawInput
      .split('\n')
      .filter((value) => value !== '')
      .map((value) => value.split('-'));

    const fromStart: string[] = [];
    const mapPoints: Map<string, string[]> = new Map();

    const addToMap = (ref: string, toAdd: string) => {
      if (ref === 'start') {
        fromStart.push(toAdd);
      } else if (toAdd !== 'start' && ref !== 'end') {
        mapPoints.set(ref, [...(mapPoints.get(ref) || []), toAdd]);
      }
    };

    for (const input of inputs) {
      const left = input[0] || '';
      const right = input[1] || '';
      addToMap(left, right);
      addToMap(right, left);
    }

    let finishablePaths = 0;
    const lowerCaseRegex = new RegExp('[a-z]');

    // console.log(fromStart);
    // console.log(mapPoints);

    const visit = (point: string, alreadyVisitedSmallCaves: string[], aSmallCaveVisitedAlreadyTwice: boolean) => {
      if (point === 'end') {
        finishablePaths++;
        return;
      }
      const smallCaveVisitedTwice = () => alreadyVisitedSmallCaves.filter((value) => value === point).length === 2;
      if (smallCaveVisitedTwice()) {
        return;
      }
      if (aSmallCaveVisitedAlreadyTwice && alreadyVisitedSmallCaves.includes(point)) {
        return;
      }
      if (lowerCaseRegex.test(point)) {
        alreadyVisitedSmallCaves.push(point);
      }
      for (const neighbour of mapPoints.get(point) || []) {
        visit(neighbour, new Array(...alreadyVisitedSmallCaves), aSmallCaveVisitedAlreadyTwice || smallCaveVisitedTwice());
      }
    };

    for (const point of fromStart) {
      visit(point, [], false);
    }

    console.log(finishablePaths);
  });

});
