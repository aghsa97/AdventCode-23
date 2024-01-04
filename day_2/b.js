export const x = "";

// const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);

let count = 0;

for (const game of lines) {
  let sets = game.split(":")[1].split(";");

  let max_red = 0;
  let max_green = 0;
  let max_blue = 0;

  for (const set of sets) {
    const cubes = set.split(",");
    for (const cube of cubes) {
      if (cube.includes("red") && Number(cube.split(" ")[1]) > max_red)
        max_red = Number(cube.split(" ")[1]);
      else if (cube.includes("green") && Number(cube.split(" ")[1]) > max_green)
        max_green = Number(cube.split(" ")[1]);
      else if (cube.includes("blue") && Number(cube.split(" ")[1]) > max_blue)
        max_blue = Number(cube.split(" ")[1]);
    }
  }

  const gamePower = max_red * max_green * max_blue;
  count += gamePower;
}

console.log("count", count);

// Answers

// true = 55593
