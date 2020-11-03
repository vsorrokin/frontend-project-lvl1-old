import { runGame, randomInteger, getProgression } from '../src/index.js';

export default function run() {
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
