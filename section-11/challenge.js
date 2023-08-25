///////////////////////////////////////
// Coding Challenge #1

const checkDogs = function (julia, kate) {
  julia_copy = [...julia];
  julia_copy.splice(0, 1); // deleting first element of the array
  julia_copy.splice(-2); // remove last two elements of array
  comb = julia_copy.concat(kate);
  comb.forEach(function (age, num) {
    if (age < 3) {
      console.log(`Dog number ${num} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${num} is an adult, and is ${age} years old`);
    }
  });
};

const data1 = {
  julia: [3, 5, 2, 12, 7],
  kate: [4, 1, 15, 8, 3],
};

const data2 = {
  julia: [9, 16, 6, 8, 3],
  kate: [10, 5, 6, 1, 4],
};

checkDogs(data1.julia, data1.kate);
console.log("\n\n");
checkDogs(data2.julia, data2.kate);

///////////////////////////////////////
// Coding Challenge #2

const calcAverageHumanAge = function (ages) {
  // Task 1
  const humanAges = ages.map((dogAge) =>
    dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge
  );
  // Task 2
  const adults = humanAges.filter((age) => age >= 18);
  // Task 3
  return adults.reduce((acc, age) => age + acc, 0) / adults.length;
};

// Task 4
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

const calcAverageHumanAge1 = (ages) =>
  ages
    .map((dogAge) => (dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge))
    .filter((age) => age >= 18)
    .reduce((acc, age, _,ages) => acc + age/ages.length, 0);

console.log(calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));




///////////////////////////////////////
// Coding Challenge #4

