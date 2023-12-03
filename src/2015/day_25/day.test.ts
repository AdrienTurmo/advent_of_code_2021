const uint16 = (n: number) => n & 0xffff;
it('day25', () => {
  let start = 20151125;

  const line = 3029;
  const column = 2947;

  const target = (line * (line + 1) + (column - 1) * (2 * line + column - 2)) / 2;

  for (let i = 1; i < target; i++) {
    start = (start * 252533) % 33554393;
  }

  console.log(start);
});
