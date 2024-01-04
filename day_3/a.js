export const x = "";

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
// const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);
let count = 0;

const extractNumberFromLine = (line, start, index) => {
  let number = "";
  let indexes = "";
  for (let x = start; x < line.length; x++) {
    if (Number(line[x]) || line[x] == 0) {
      number += line[x];
      indexes += x + "-";
    } else if (number && indexes.includes(index)) {
      return { number, end: x };
    } else {
      number = "";
      indexes = "";
    }
  }
  return { number, end: 0 };
};

for (let line = 0; line < lines.length; line++) {
  for (let char = 0; char < lines[line].length; char++) {
    const part = lines[line][char];
    if (!Number(part) && part !== "." && part != 0) {
      let start = 0;
      for (let x = line - 1; x <= line + 1; x++) {
        start = 0;
        for (let j = char - 1; j <= char + 1; j++) {
          if (start >= char + 1) break;
          if (Number(lines[x][j]) || lines[x][j] == 0) {
            const { number, end } = extractNumberFromLine(lines[x], start, j);
            count += Number(number);
            start = end;
            console.log(number, part, lines[x][j]);
            continue;
          }
        }
      }
    }
  }
}

console.log(count);

// Answer 4361 - Excluded 114 - 58
// flase = 455078 too low
// flase = 530372 too low
// flase = 663976
// flase = 619703
// flase = 563786
// true = 549908
