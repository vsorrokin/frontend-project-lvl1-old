import { runGame, randomInteger, isPrime } from '../src/index.js';

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
