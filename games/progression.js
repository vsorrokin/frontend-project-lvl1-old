import { runGame, randomInteger } from '../src/index.js';

function getProgression(length = 10) {
  const start = randomInteger(0, 20);
  const step = randomInteger(1, 20);

  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(start + step * i);
  }

  return result;
}

export default async function run() {
  const description = 'What number is missing in the progression?';
  const questionAndAnswer = () => {
    const length = 10;
    const progression = getProgression(length);
    const hiddenIndex = randomInteger(0, length - 1);
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    return {
      question: progression.join(' '),
      answer,
    };
  };

  runGame(description, questionAndAnswer);
}
