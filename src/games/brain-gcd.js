import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const gcdGame = () => {
  const randomNumber1 = randomNumber(1, 20);
  const randomNumber2 = randomNumber(1, 20);
  const randomOperation = `${randomNumber1} ${randomNumber2}`;

  return [randomOperation, String(gcd(randomNumber1, randomNumber2))];
};

const startGame = () => gameRounds(description, gcdGame);

export default startGame;
