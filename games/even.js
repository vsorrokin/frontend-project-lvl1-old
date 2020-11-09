import { runGame, randomInteger } from '../src/index.js';

function isEven(n) {
  return n % 2 === 0;
}

export default function run() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const minNum = 1;
    const maxNum = 100;
    const num = randomInteger(minNum, maxNum);

    return {
      question: num,
      answer: isEven(num) ? 'yes' : 'no',
    };
  };

  runGame(description, getQuestionAndAnswer);
}
