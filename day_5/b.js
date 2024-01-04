export const x = "";

const input = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;
// const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);
const seeds = lines[0]
  .split(":")[1]
  .split(" ")
  .filter(Boolean)
  .map((number) => [Number(number), Number(number)]);

for (let line = 0; line < lines.length; line++) {
  if (Number(lines[line][0]) || lines[line][0] == 0) {
    const [destiniation, src, range] = lines[line].split(" ");
    for (let index in seeds) {
      let [seed_src, seed_des] = seeds[index];
      seed_src = Number(seed_src);
      if (seed_src >= Number(src) && seed_src < Number(src) + Number(range)) {
        seed_des = seed_src - Number(src) + Number(destiniation);
        seeds[index] = [seed_src, seed_des];
      }
    }
  } else if (lines[line] !== "" && line > 0) {
    for (let index in seeds) {
      let [_, des] = seeds[index];
      seeds[index] = [des, des];
    }
  }
}

const lowestValue = seeds.reduce((min, current) => {
  return current[1] < min ? current[1] : min;
}, Infinity);
console.log("seeds", lowestValue);

// Answers 35 is example answer
// true = 251346198
