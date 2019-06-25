import readlineSync from 'readline-sync';

const gameRounds = 3;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gamePlay = (task, currentData, currentQuestion, currentAnswer) => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  let resultOfGame;
  let points = 0;

  for (let r = 1; r <= gameRounds; r += 1) {
    const currentRound = currentData();
    console.log(`Question: ${currentQuestion(currentRound)}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = currentAnswer(currentRound);

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

  if (points === gameRounds) {
    resultOfGame = `Congratulations, ${userName}!`;
  } else {
    resultOfGame = `Let's try again, ${userName}!`;
  }
  console.log(resultOfGame);
  return resultOfGame;
};

export { gamePlay, randomNum };
