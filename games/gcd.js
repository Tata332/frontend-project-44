import getEngine from '../src/index.js';
import { getRandomNumber} from '../src/utils.js';


const rule = 'Find the greatest common divisor of given numbers.';

const answerGcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
  
    return answerGcd(num2, num1 % num2);
  };
  
  const getQuestionAndAnswer = () => {
    const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
    const answer = answerGcd(...question).toString();
    return [question.join(' '), answer];
  };
  
  export default () => {
    gameEngine(rule, getQuestionAndAnswer);
  };