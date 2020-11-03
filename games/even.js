import { runGame, randomInteger, isEven } from '../src/index.js';

export default function run() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAndAnswer = () => {
    const minNum = 1;
    const maxNum = 100;
    const num = randomInteger(minNum, maxNum);

    return {
      question: num,
      answer: isEven(num) ? 'yes' : 'no',
    };
  };

  runGame(description, questionAndAnswer);
}
