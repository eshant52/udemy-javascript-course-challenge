///////////////////////////////////////
// Coding Challenge #1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const question = `${this.question}\n${this.options.join("\n")}\n(Enter only option number)`;
    const answer = Number(prompt(question));
    if (isNaN(answer) || typeof answer != 'number' || this.answers.length < answer) {
        alert("Please enter correct option number, Re-enter again.");
    }
    else {
        // updating poll answer
        this.answers[answer]++;
    }

    console.log(answer);
    this.displayResults();
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    }
    else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};


// setting event listener (higher order function) and calling object literal's function by binding its own object
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));


// Bonus 
poll.displayResults.call({ answers: [5, 2, 3]}, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1]});




///////////////////////////////////////
// Coding Challenge #2

(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    // Explanation: We can access the header const variable because of clourse, which attach the variable state which is used in anonymous function.
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();
