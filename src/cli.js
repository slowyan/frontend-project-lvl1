console.log('Welcome to the Brain Games!');


import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have your name? ');

const greeting = console.log(`Hello, ${name}!`);

export default greeting 

