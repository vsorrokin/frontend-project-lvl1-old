import promptly from 'promptly';
import cli from './cli.js';

export async function runGame(description, questionAndAnswer) {
  const name = await cli();

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = questionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = await promptly.prompt('Your answer:? ');

    if (userAnswer !== answer) {
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
