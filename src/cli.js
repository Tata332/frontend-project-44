import readlineSync from 'readline-sync';

const greetingUser = () => {
    const runGames = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${runGames}!`);
}

export default greetingUser;