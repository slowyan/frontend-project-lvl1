import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i < number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const primeGame = () => {
  const userQuestion = randomNumber(2, 100);
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

const startGame = () => gameRounds(description, primeGame);

export default startGame;
