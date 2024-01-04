export const x = "";

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
// const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);

let count = 0;
for (const line of lines) {
  let code = "";
  let first_number = "";
  let last_number = "";
  for (const char of line) {
    if (Number(char)) {
      if (!first_number) first_number = char;
      last_number = char;
    }
  }
  code = first_number + last_number;
  count += Number(code);
}

console.log(count);

// Answer
// True = 56108
