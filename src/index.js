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
    return '';
  };

  isEven();
};

export const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  const calc = () => {
    const gameRounds = 3;
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const randomSign = (currentSign) => {
      switch (currentSign) {
        case 1:
          return '+';
        case 2:
          return '-';
        case 3:
          return '*';
        default:
          return 'default';
      }
    };

    for (let i = 1; i <= gameRounds; i += 1) {
      const firstNum = randomNum(1, 101);
      const secNum = randomNum(1, 101);
      const curSign = randomSign(randomNum(1, 4));
      const calcQuestion = () => `${firstNum} ${curSign} ${secNum}`;

      console.log(`Question: ${calcQuestion()}`);
      const curAnswer = readlineSync.question('Your answer: ');

      const curResult = () => {
        let result;
        switch (curSign) {
          case '+':
            result = firstNum + secNum;
            break;
          case '-':
            result = firstNum - secNum;
            break;
          case '*':
            result = firstNum * secNum;
            break;
          default:
            return 'default';
        }
        return result;
      };

      let result;
      if (Number(curAnswer) === curResult()) {
        result = 'Correct';
      } else {
        result = `'${curAnswer}' is wrong answer ;(. Correct answer was '${curResult()}'.\nLet's try again, ${userName}!`;
        console.log(result);
        return result;
      }
      console.log(result);
    }
    console.log(`Congratulations, ${userName}!`);
    return '';
  };

  calc();
};

export const brainGcd = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  const gcd = () => {
    const gameRounds = 3;
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    for (let i = 1; i <= gameRounds; i += 1) {
      const firstNum = randomNum(1, 101);
      const secondNum = randomNum(1, 101);

      const calcQuestion = () => `${firstNum} ${secondNum}`;

      console.log(`Question: ${calcQuestion()}`);
      const curAnswer = readlineSync.question('Your answer: ');

      const curResult = () => {
        let result;
        if (firstNum > secondNum) {
          for (let x = secondNum; x > 0; x -= 1) {
            if (firstNum % x === 0 && secondNum % x === 0) {
              result = x;
              return result;
            }
          }
        } else if (firstNum < secondNum) {
          for (let x = firstNum; x > 0; x -= 1) {
            if (firstNum % x === 0 && secondNum % x === 0) {
              result = x;
              return result;
            }
          }
        }
        return firstNum;
      };

      let result;
      if (Number(curAnswer) === curResult()) {
        result = 'Correct';
      } else {
        result = `'${curAnswer}' is wrong answer ;(. Correct answer was '${curResult()}'.\nLet's try again, ${userName}!`;
        console.log(result);
        return result;
      }
      console.log(result);
    }
    console.log(`Congratulations, ${userName}!`);
    return '';
  };

  gcd();
};
