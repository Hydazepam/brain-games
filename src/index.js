import readlineSync from 'readline-sync';

const gameRounds = 3;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gamePlay = (task, currentData, currentQuestion, currentAnswer) => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  for (let r = 1; r <= gameRounds; r += 1) {
    const currentRound = currentData();
    console.log(`Question: ${currentQuestion(currentRound)}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = currentAnswer(currentRound);

    if (gamerAnswer === correctAnswer) {
      console.log('Correct');
    }
    return `'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return `Congratulations, ${userName}!`;
};

export { gamePlay, randomNum };
