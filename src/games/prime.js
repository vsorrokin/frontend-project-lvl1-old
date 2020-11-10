import runGame from '../index.js';
import { randomInteger } from '../utils.js';

export function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;

  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const minNum = 1;
  const maxNum = 3571;
  const num = randomInteger(minNum, maxNum);

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => runGame(description, getQuestionAndAnswer);
