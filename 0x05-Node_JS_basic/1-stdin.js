const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
