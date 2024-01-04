export const x = "";

const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
// const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);
let count = 0;

for (const line of lines) {
  let points = 0;
  const winning_cards = line
    .split("|")[0]
    .split(":")[1]
    .split(" ")
    .filter(Boolean);
  const cards_to_check = line.split("|")[1].split(" ").filter(Boolean);
  for (const number_to_check of cards_to_check) {
    for (const winning_number of winning_cards) {
      if (number_to_check === winning_number) {
        points = points === 0 ? 1 : points * 2;
      }
    }
  }
  count += points;
}

console.log(count);

// Answers 13 is example answer
// true = 28750
