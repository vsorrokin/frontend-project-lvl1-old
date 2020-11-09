import { runGame, randomInteger } from '../src/index.js';

function calc(operation, leftOperand, rightOperand) {
  let answer;

  switch (operation) {
    case '+':
      answer = leftOperand + rightOperand;
      break;
    case '-':
      answer = leftOperand - rightOperand;
      break;
    case '*':
      answer = leftOperand * rightOperand;
      break;
    default:
      break;
  }

  return answer;
}

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
