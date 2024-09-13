import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const missingNumber = getRandomNumber(1, progression.length);
  const answer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => getEngine(rule, getRound);
