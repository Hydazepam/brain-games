import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
};

export default getName;

export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  const isEven = () => {
    const gameRounds = 3;
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    for (let i = 1; i <= gameRounds; i += 1) {
      const currentNum = randomNum(1, 101);
      console.log(`Question: ${currentNum}`);
      const curAnswer = readlineSync.question('Your answer: ');
      let result;
      if ((currentNum % 2 === 0 && curAnswer === 'yes') || (currentNum % 2 !== 0 && curAnswer === 'no')) {
        result = 'Correct';
      } else {
        result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
        console.log(result);
        return result;
      }
      console.log(result);
    }
    console.log(`Congratulations, ${userName}!`);
  };

  isEven();
};
