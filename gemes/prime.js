import gameEngine from '../src/index.js';
import { getRandomNumber} from '../src/utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    let i = 2;
    while (i <= (number / 2)) {
      if (number % i === 0) {
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
  
  export default () => gameEngine(rule, getQuestionAndAnswer);