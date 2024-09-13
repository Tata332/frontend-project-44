import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const getCalcOperator = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = getCalcOperator(firstNumber, secondNumber, operator);
  return [question, String(answer)];
};

export default () => {
  getEngine(rule, getRound);
};
