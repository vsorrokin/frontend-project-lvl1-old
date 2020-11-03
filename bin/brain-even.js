#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import promptly from 'promptly';
// eslint-disable-next-line import/no-named-as-default-member
import brainGames from './brain-games.js';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

async function run() {
  const name = await brainGames;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = randomInteger(1, 100);
    console.log(`Question: ${num}`);
    const answer = await promptly.prompt('Your answer:? ');

    const correctAnswer = num % 2 ? 'no' : 'yes';

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

run();
