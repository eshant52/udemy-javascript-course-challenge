'use strict';
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
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

console.log(`players1: ${players1}`);
console.log(`players2: ${players2}`);

// Question 2
const [gk , ...fieldPlayers] = players1;
console.log(`gk: ${gk}`);
console.log(`field Players: ${fieldPlayers}`);

// Question 3
const allPlayers = [...players1, ...players2];
console.log(`all Players: ${allPlayers}`);

// Question 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`players1's Final team: ${players1Final}`);

// Question 5
const {team1:team1, x:draw, team2:team2} = game.odds
console.log(`team1: ${team1}`);
console.log(`draw: ${draw}`);
console.log(`team2: ${team2}`);

// Question 6
const printGoals = function(...para) {
  for (let i=0; i<para.length; i++) {
    console.log(`Player ${para[i]} has scored ${para[i]}`)
  }
}

// Question 7
team1 < team2 && console.log(`${game.team1} is more likely to win the game.`);
team1 > team2 && console.log(`${game.team2} is more likely to win the game.`);



console.log(''.padEnd(50, '*'));
console.log('Coding challenge 2');

/////////////////////////////////////////
// Coding Challenge #2

// Question 1
for (let [index, name] of game.scored.entries()) {
  console.log(`Goal ${index+1}: ${name}`);
}

// Question 2
let avg = 0;
const odds = Object.values(game.odds);
for (let odd of odds) avg += odd;
avg /= odds.length;
console.log(`Average of odds is ${avg}`);

// Question 3
for (let [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of ${key==='x'?'draw':`victory ${game[key]}`}: ${value}`);
}

// Bonus
const scorers = {};
for (let player of game.scored) {
  scorers[player] = ++scorers[player] || 1;
}
console.log(scorers);





console.log(''.padStart(50, '*'));
console.log('Coding challenge 3');

///////////////////////////////////////
// Coding Challenge #3


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Question 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Question 2
gameEvents.delete(64) && console.log('In game events log, 64 min event log has been deleted.');

// 



console.log(''.padEnd(50, '*'));
console.log('Coding challenge 4');

///////////////////////////////////////
// Coding Challenge #4