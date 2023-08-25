"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, doSort = false) {
  containerMovements.innerHTML = "";

  const movs = doSort ? movements.slice().sort((a, b) => a-b) : movements;

  movs.forEach(function (tran) {
    const transaction_type = tran > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transaction_type}">
            ${transaction_type}
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">₹ ${Math.abs(tran)}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcBalance = function (acc) {
  const bal = acc.movements.reduce((accu, mov) => accu + mov, 0);
  labelBalance.textContent = `₹ ${bal}`;
  acc.balance = bal;
};

const calcSummary = function (acc) {
  const total_deposit = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `₹ ${total_deposit}`;

  const total_withdrawals = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `₹ ${Math.abs(total_withdrawals)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i) => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `₹ ${interest}`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

const uiUpdate = function (account) {
  displayMovements(account.movements);

  calcBalance(account);

  calcSummary(account);
};

// Event handlers

let currentAccount;

// Login event
btnLogin.addEventListener("click", function (e) {
  // prevent form from submiting
  e.preventDefault();

  const username = (inputLoginUsername.value = "js");
  const pin = (inputLoginPin.value = "1111");

  currentAccount = accounts.find((acc) => acc.username === username);
  console.log(username + " " + pin);

  if (currentAccount?.pin === Number(pin)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();

    uiUpdate(currentAccount);
  }
});

// transfer money event
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const recvAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  if (
    !isNaN(amount) &&
    amount > 0 &&
    recvAcc &&
    currentAccount.balance >= amount &&
    recvAcc?.username !== currentAccount.username
  ) {
    // perform transfer
    currentAccount.movements.push(-amount);
    recvAcc.movements.push(amount);

    uiUpdate(currentAccount);
  }
});

// alocating loan event
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  
  if (!isNaN(amount) && amount>0 && currentAccount.movements.some(mov => mov >= amount*0.1)) {
    // add amount to movments
    currentAccount.movements.push(amount);

    // update the ui
    uiUpdate(currentAccount);
  }
});

// delete account event
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  const pin = Number(inputClosePin.value);
  const username = inputCloseUsername.value;

  if (
    !isNaN(pin) &&
    username === currentAccount.username &&
    pin === currentAccount.pin
  ) {
    const idx = accounts.findIndex(acc => acc.username === username);
    console.log(idx);

    // delete account
    accounts.splice(idx, 1);
    
    // hide ui
    containerApp.style.opacity = 0; 
  }
});

// Sorting movement
let doSort = true;
btnSort.addEventListener("click", function(e) {
  displayMovements(currentAccount.movements, !doSort);
  doSort = !doSort;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
