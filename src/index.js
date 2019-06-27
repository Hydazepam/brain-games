import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const playGame = (task, makeGame) => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  let resultOfGame;
  let points = 0;

  for (let i = 1; i <= roundsCount; i += 1) {
    const roundData = makeGame();
    console.log(`Question: ${car(roundData)}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(roundData);

    let result;
    if (gamerAnswer === correctAnswer) {
      result = 'Correct';
    } else {
      result = `'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(result);
      break;
    }
    console.log(result);

    if (result === 'Correct') {
      points += 1;
    } else {
      points = 0;
    }
  }

  if (points === roundsCount) {
    resultOfGame = `Congratulations, ${userName}!`;
  } else {
    resultOfGame = `Let's try again, ${userName}!`;
  }
  console.log(resultOfGame);
  return resultOfGame;
};

export default playGame;
