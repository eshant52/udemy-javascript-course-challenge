"use strict";
///////////////////////////////////////
// Coding Challenge #1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question 1
// Destructuring array and storing into new array
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

console.log(`players1: ${players1}`);
console.log(`players2: ${players2}`);

// Question 2
// Using rest pattern and destructuring array
const [gk, ...fieldPlayers] = players1;
console.log(`gk: ${gk}`);
console.log(`field Players: ${fieldPlayers}`);

// Question 3
// Distructuring array
const allPlayers = [...players1, ...players2];
console.log(`all Players: ${allPlayers}`);

// Question 4
// Adding new elements by creating new array and adding old elements from old array using spread operator
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`players1's Final team: ${players1Final}`);

// Question 5
// Assigning value of object by destructuring object literal
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(`team1: ${team1}`);
console.log(`draw: ${draw}`);
console.log(`team2: ${team2}`);

// Question 6
// rest parameter operation
const printGoals = function (...para) {
  for (let i = 0; i < para.length; i++) {
    console.log(`Player ${para[i]} has scored ${para[i]}`);
  }
};

// Question 7
// solved using short circuiting
team1 < team2 && console.log(`${game.team1} is more likely to win the game.`);
team1 > team2 && console.log(`${game.team2} is more likely to win the game.`);

console.log("".padEnd(50, "*"));
console.log("Coding challenge 2");




/////////////////////////////////////////
// Coding Challenge #2

// Question 1
// Accessing each element of array entries
for (let [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}

// Question 2
// Using Object methods to access the object values
let avg = 0;
const odds = Object.values(game.odds);
for (let odd of odds) avg += odd;
avg /= odds.length;
console.log(`Average of odds is ${avg}`);

// Question 3
// Using Object methods to access the object entries and looping through each entry
for (let [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${key === "x" ? "draw" : `victory ${game[key]}`}: ${value}`
  );
}

// Bonus
const scorers = {};
for (let player of game.scored) {
  scorers[player] = ++scorers[player] || 1;
}
console.log(scorers);

console.log("".padStart(50, "*"));
console.log("Coding challenge 3");




///////////////////////////////////////
// Coding Challenge #3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Question 1
// Storing non-repeatative values of maps in new array by using Set Constructor
const events = [...new Set(gameEvents.values())];
console.log(events);

// Question 2
// deleting 64 number key entry from the map
gameEvents.delete(64) &&
  console.log("In game events log, 64 min event log has been deleted.");

// Question 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Question 4
// Accessing each element of gameEvents map
for (let [min, event] of gameEvents) {
  console.log(`[${min <= 45 ? "FIRST" : "SECOND"} HALF] ${min}: ${event}`);
}

console.log("".padEnd(50, "*"));
console.log("Coding challenge 4");




///////////////////////////////////////
// Coding Challenge #4

const underScoreToCameleCase = function (str) {
  // separating the string into sub string by deliminating underscore '_' and storing them into an array called separate
  const separate = str.split('_');
  
  // convert first letter of each sub string of separate array except first substring
  for (let [idx, substr] of separate.entries()) {
    if(idx===0) continue;
    separate[idx] = substr[0].toUpperCase() + substr.slice(1);
  }

  // joining the string to form a string and returning the final string output
  return separate.join('');
}

document.querySelector("#convert").addEventListener('click', function () {
  const text = document.querySelector('.input').value;
  const convert = text.split('\n');
  
  for (let [idx, element] of convert.entries()) {
    convert[idx] = underScoreToCameleCase(element.trim().toLowerCase());
  }

  for (let [idx, element] of convert.entries()) {
    console.log(`${element.padEnd(25, ' ')}${'✅'.repeat(idx+1)}`);
  }
});
