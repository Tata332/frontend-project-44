import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const calculate = (num1, num2) => {
  const randomSymbol = operators[Math.floor(Math.random() * operators.length)];
  if (randomSymbol === '+') {
    return {
      equasion: `${num1} + ${num2}`,
      result: `${num1 + num2}`,
    };
  }
  if (randomSymbol === '-') {
    return {
      equasion: `${num1} - ${num2}`,
      result: `${num1 - num2}`,
    };
  }
  return {
    equasion: `${num1} * ${num2}`,
    result: `${num1 * num2}`,
  };
};

const getQuestionAndAnswer = () => {
  const equasion = calculate(getRandomNumber(0, 100), getRandomNumber(0, 100));
  return [equasion.equasion, equasion.result];
};

export default () => {
  getEngine(rule, getQuestionAndAnswer);
};
