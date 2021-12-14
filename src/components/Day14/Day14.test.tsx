import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { addToRecord, countLetters, splitLines } from 'utils/Utils';

describe('<Day14 />', () => {
  it('should work', () => {
    const rawExamplePolymerTemplate = 'NNCB';
    const rawExampleInput = `
CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`;

    const rawPolymerTemplate = 'ONSVVHNCFVBHKVPCHCPV';
    const rawInput = `
VO -> C
VV -> S
HK -> H
FC -> C
VB -> V
NO -> H
BN -> B
FP -> K
CS -> C
HC -> S
FS -> K
KH -> V
CH -> H
BP -> K
OF -> K
SS -> F
SP -> C
PN -> O
CK -> K
KS -> H
HO -> K
FV -> F
SN -> P
HN -> O
KK -> H
KP -> O
CN -> N
BO -> C
CC -> H
PB -> F
PV -> K
BV -> K
PP -> H
KB -> F
NC -> F
PC -> V
FN -> N
NH -> B
CF -> V
PO -> F
KC -> S
VP -> P
HH -> N
OB -> O
KN -> O
PS -> N
SF -> V
VK -> F
CO -> N
KF -> B
VC -> C
SH -> S
HV -> V
FK -> O
NV -> N
SC -> O
BK -> F
BB -> K
HF -> K
OC -> O
KO -> V
OS -> P
FF -> O
PH -> F
FB -> O
NN -> C
NK -> C
HP -> B
PF -> H
PK -> C
NP -> O
NS -> V
CV -> O
VH -> C
OP -> N
SO -> O
SK -> H
SV -> O
NF -> H
BS -> K
BH -> O
VN -> S
HB -> O
OH -> K
CB -> B
BC -> S
OV -> F
BF -> P
OO -> F
HS -> H
ON -> P
NB -> F
CP -> S
SB -> V
VF -> C
OK -> O
FH -> H
KV -> S
FO -> C
VS -> B
`;

    let polymer = rawPolymerTemplate;
    const instructions: Map<string, string> = new Map(
      splitLines(rawInput)
        .map(line => line.split(' -> '))
        .map(value => [value[0], value[1]])
    )

    const countPairOfLetters: Record<string, number> = {};
    for (let i = 1; i < polymer.length; i++) {
      addToRecord(countPairOfLetters, `${polymer[i - 1]}${polymer[i]}`)
    }

    const letterCounter = countLetters(polymer);
    const doInstruction = (pairOfLetter: Record<string, number>) => {
      const newPairs: Record<string, number> = {};

      for (const key of Object.keys(pairOfLetter)) {
        const left = key.charAt(0);
        const right = key.charAt(1);
        const insert: string | undefined = instructions.get(`${left}${right}`);

        if (!insert) {
          addToRecord(newPairs, `${left}${right}`, pairOfLetter[key])
        } else {
          addToRecord(newPairs, `${insert}${right}`, pairOfLetter[key])
          addToRecord(newPairs, `${left}${insert}`, pairOfLetter[key])
          addToRecord(newPairs, `${left}${right}`, -pairOfLetter[key])
          addToRecord(letterCounter, insert, pairOfLetter[key]);
        }
      }

      return newPairs;
    }

    const nbStep = 40;
    for (let i = 0; i < nbStep; i++) {
      const newPairs = doInstruction(countPairOfLetters);
      for (const pair in newPairs) {
        addToRecord(countPairOfLetters, pair, newPairs[pair])
      }
    }

    const values = Object.values(letterCounter);

    console.log(Math.max(...values) - Math.min(...values))

  });
});
