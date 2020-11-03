import { runGame, randomInteger, gcd } from '../src/index.js';

export default function run() {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionAndAnswer = () => {
    const minNum = 1;
    const maxNum = 20;

    const firstNum = randomInteger(minNum, maxNum);
    const secondNum = randomInteger(minNum, maxNum);

    return {
      question: `${firstNum} ${secondNum}`,
      answer: gcd(firstNum, secondNum),
    };
  };

  runGame(description, questionAndAnswer);
}
