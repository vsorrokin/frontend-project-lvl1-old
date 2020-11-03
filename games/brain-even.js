#!/usr/bin/env node
import { runGame, randomInteger } from '../src/index.js';

async function run() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAndAnswer = () => {
    const num = randomInteger(1, 100);

    return {
      question: num,
      answer: num % 2 ? 'no' : 'yes',
    };
  };

  runGame(description, questionAndAnswer);
}

run();
