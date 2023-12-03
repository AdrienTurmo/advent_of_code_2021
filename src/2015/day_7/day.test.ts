import { readFile } from "2015/utils/utils";

const uint16 = (n: number) => n & 0xFFFF;
it("day7", () => {
  const input = readFile("day_7/input.txt");

  const methods = {
    AND: (a: number, b: number) => uint16(a) & uint16(b),
    OR: (a: number, b: number) => uint16(a) | uint16(b),
    LSHIFT: (a: number, b: number) => uint16(a) << uint16(b),
    RSHIFT: (a: number, b: number) => uint16(a) >> uint16(b),
  };

  const NOT = (a: number) => uint16(~a)

  let instructions: Record<string, string[] | number> = {};

  const analyse = (l: string) => {
    let splitted = l.split("->").map(s => s.trim());
    const target = splitted[1];
    const inst = splitted[0].split(" ");

    instructions[target] = inst;
  };

  input.forEach(l => analyse(l));

  const doInstruction = (wire: string): number => {
    const instr= instructions[wire];

    const numberOrString = (truc: string | number): number => {
      if (typeof truc === 'number')
        return truc
      else if (truc.match(/\d+/))
        return uint16(Number(truc))
      else
        return uint16(doInstruction(truc))
    }

    if (typeof instr === 'number') return instr

    let result

    if (instr.length === 1) {
      result = numberOrString(instr[0])
    } else if (instr.length === 2) {
      result = NOT(numberOrString(doInstruction(instr[1])))
    } else {
      // @ts-ignore
      result = methods[instr[1]](numberOrString(instr[0]), numberOrString(instr[2]))
    }

    instructions[wire] = result;
    return result
  };

  const result = doInstruction('a')

  console.log(instructions);

  console.log(result);
});
