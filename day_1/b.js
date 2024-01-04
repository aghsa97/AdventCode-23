export const x = "";

const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
// const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);

let count = 0;

const isOneToNine = (line) => {
  let numbers = "";
  let word = "";
  const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (const char of line) {
    if (Number(char)) {
      numbers += char;
      word = "";
      continue;
    }
    word += char;
    for (let i = 0; i < Object.keys(obj).length; i++) {
      const number = Object.keys(obj)[i];
      if (number.startsWith(word)) {
        if (word === number) {
          numbers += obj[number];
          word = word.slice(word.length - 1);
        }
        break;
      } else if (Object.keys(obj).length - 1 === i) {
        word = word.substring(1);
      }
    }
  }
  return numbers;
};

for (const line of lines) {
  let code = "";
  let first_number = "";
  let last_number = "";
  const convertedLine = isOneToNine(line);
  first_number = convertedLine[0];
  last_number = convertedLine[convertedLine.length - 1];
  code = first_number + last_number;
  count += Number(code);
}

console.log("count", count);

// Answers

// 55648 False. Too low
