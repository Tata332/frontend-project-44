const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};
  
const getRandomOperator = (num1, num2) => {
  const operators = ['+', '-', '*'];
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
  
export { getRandomNumber, getRandomOperator };
