import gameEngine from '../index.js';
import { getRandomNumber} from '../utils.js';


const rule = 'Find the greatest common divisor of given numbers.';

const answerGcd = (num1, num2) => {
  let divisor = 1;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  };
    return divisor;
  };
  
  const getQuestionAndAnswer = () => {
    const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
    const answer = answerGcd(...question).toString();
    return [question.join(' '), answer];
  };
  
  export default () => {
    gameEngine(rule, getQuestionAndAnswer);
  };