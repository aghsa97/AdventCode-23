export const x = "";

// const input = `467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..`;
const input = await Deno.readTextFile("./input.txt");

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
    if (part === "*") {
      let start = 0;
      const ratio_numbers = [];
      for (let x = line - 1; x <= line + 1; x++) {
        start = 0;
        for (let j = char - 1; j <= char + 1; j++) {
          if (start >= char + 1) break;
          if (Number(lines[x][j]) || lines[x][j] == 0) {
            const { number, end } = extractNumberFromLine(lines[x], start, j);
            start = end;
            ratio_numbers.push(number);
            if (ratio_numbers.length === 2) {
              const ratio = ratio_numbers[0] * ratio_numbers[1];
              count += ratio;
            }
            continue;
          }
        }
      }
    }
  }
}

console.log(count);

// Answer 4361 - Excluded 114 - 58
// true = 81166799
