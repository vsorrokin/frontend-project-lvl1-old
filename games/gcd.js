import { runGame, randomInteger } from '../src/index.js';

export function gcd(num1, num2) {
  const min = num1 > num2 ? num2 : num1;
  const max = num1 < num2 ? num2 : num1;

  let result;

  for (let i = min; i > 0; i -= 1) {
    if (min % i === 0 && max % i === 0) {
      result = i;
      break;
    }
  }

  return result;
}

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
