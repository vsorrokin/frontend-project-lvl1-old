import runGame from '../index.js';
import { randomInteger } from '../utils.js';

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

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const minOperandValue = 0;
  const maxOperandValue = 20;
  const operation = operations[randomInteger(0, randomInteger.length - 1)];
  const leftOperand = randomInteger(minOperandValue, maxOperandValue);
  const rightOperand = randomInteger(minOperandValue, maxOperandValue);

  const question = `${leftOperand} ${operation} ${rightOperand}`;

  return {
    question,
    answer: String(calc(operation, leftOperand, rightOperand)),
  };
};

export default () => runGame(description, getQuestionAndAnswer);
