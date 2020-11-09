import { runGame, randomInteger } from '../src/index.js';

export function isPrime(n) {
  if (n < 4) return true;

  let result = true;

  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

export default function run() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionAndAnswer = () => {
    const minNum = 1;
    const maxNum = 3571;
    const num = randomInteger(minNum, maxNum);

    return {
      question: num,
      answer: isPrime(num) ? 'yes' : 'no',
    };
  };

  runGame(description, questionAndAnswer);
}
