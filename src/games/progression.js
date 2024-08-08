import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const getProgression = (startProgression, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startProgression + (step * i));
  }
  return progression;
};

const getRound = () => {
  const startProgression = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(startProgression, step, progressionLength);
  const missingNumber = getRandomNumber(0, progressionLength - 1);
  const answer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => getEngine(rule, getRound);
