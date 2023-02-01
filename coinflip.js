const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 100;

const flipCoin = () => {
  return Math.random() > 0.5 ? 'heads' : 'tails';
};

const startGame = () => {
  console.log(`Your balance is $${balance}`);
  readline.question(`How much would you like to bet on heads or tails? `, (bet) => {
    if (bet > balance) {
      console.log(`Insufficient balance. Your balance is $${balance}`);
      startGame();
    } else {
      const coin = flipCoin();
      console.log(`The coin landed on ${coin}`);
      if (coin === 'heads') {
        balance += parseInt(bet);
        console.log(`Congratulations! You won $${bet}. Your new balance is $${balance}`);
      } else {
        balance -= parseInt(bet);
        console.log(`Sorry, you lost $${bet}. Your new balance is $${balance}`);
      }
      if (balance <= 0) {
        console.log('You have no more money. Game over.');
        readline.close();
      } else {
        startGame();
      }
    }
  });
};

startGame();
