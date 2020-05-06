const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How long would you like your timer to be?', (answer) => {
  // TODO: Log the answer in a database
  if (answer === 'b') {
    process.stdout.write('\x07');
  }
  if (!isNaN(answer)) {
    const time = parseInt(answer);
    if (answer >= 1 && answer <= 9) {
      setTimeout(() => {
        process.stdout.write('\x07');
      },time * 1000);
    } else {
      console.log('Answer must between 1 and 9');
    }
  } else {
    console.log('Input must be a number');
  }
  

  rl.close();
});