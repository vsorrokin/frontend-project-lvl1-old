import promptly from 'promptly';
import cli from './cli.js';

export async function runGame(description, questionAndAnswer) {
  const name = await cli();

  console.log(description);

  const gamesCount = 3;

  for (let i = 0; i < gamesCount; i += 1) {
    const { question, answer } = questionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = await promptly.prompt('Your answer:? ');

    if (userAnswer !== answer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

export function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function getProgression(length = 10, startFrom = 0,
  startTo = 20, stepFrom = 1, stepTo = 20) {
  const start = randomInteger(startFrom, startTo);
  const step = randomInteger(stepFrom, stepTo);

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
}

export function isEven(n) {
  return n % 2 === 0;
}

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
