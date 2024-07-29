import getEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i <= (num / 2)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => getEngine(rule, getQuestionAndAnswer);
