import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const answer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default () => {
  gameEngine(rule, answer);
};