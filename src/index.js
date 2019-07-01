import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const playGame = (task, makeRound) => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const roundData = makeRound();
    console.log(`Question: ${car(roundData)}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(cdr(roundData));

    if (gamerAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
