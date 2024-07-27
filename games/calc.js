import getEngine from '../src/index.js';
import { getRandomNumber, getRandomOperator } from '../src/utils.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
    const equasion = randomEquasion(getRandomNumber(0, 100), getRandomNumber(0, 100));
    return [equasion.equasion, equasion.result];
};

export default () => {
    getEngine(rule, getQuestionAndAnswer);
};;