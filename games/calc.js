import { runGame, randomInteger, calc } from '../src/index.js';

export default function run() {
  const operations = ['+', '-', '*'];
  const description = 'What is the result of the expression?';
  const questionAndAnswer = () => {
    const minOperandValue = 0;
    const maxOperandValue = 20;
    const operation = operations[randomInteger(0, randomInteger.length - 1)];
    const leftOperand = randomInteger(minOperandValue, maxOperandValue);
    const rightOperand = randomInteger(minOperandValue, maxOperandValue);

    const question = `${leftOperand} ${operation} ${rightOperand}`;

    return {
      question,
      answer: calc(operation, leftOperand, rightOperand),
    };
  };

  runGame(description, questionAndAnswer);
}
