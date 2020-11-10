import runGame from '../index.js';
import { randomInteger } from '../utils.js';

function isEven(n) {
  return n % 2 === 0;
}

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

export default () => runGame(description, getQuestionAndAnswer);
