const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  '"Welcome to Holberton School, what is your name?\n',
  (answer) => rl.write(`Your name is: ${answer}\n`),
);
process.on('exit', () => console.log('This important software is now closing'));
