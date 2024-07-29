import getEngine from '../index.js';
import { getRandomNumber, getRandomOperator } from '../utils.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const equasion = getRandomOperator(getRandomNumber(0, 100), getRandomNumber(0, 100));
  return [equasion.equasion, equasion.result];
};

export default () => {
  getEngine(rule, getQuestionAndAnswer);
};
