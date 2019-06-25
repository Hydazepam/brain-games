import { gamePlay, randomNum } from '../index';

const task = 'What number is missing in the progression?';

const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return 'default';
  }
};

const car = pair => pair('car');
const cdr = pair => pair('cdr');

const currentData = () => {
  const start = randomNum(1, 101);
  const step = randomNum(1, 11);
  const length = 10;
  const questionPlace = randomNum(0, 10);

  const progrGame = () => {
    const result = [start];
    for (let n = 1; n < length; n += 1) {
      const nextNum = start + step * n;
      result.push(nextNum);
    }
    return result;
  };
  const progresion = progrGame();
  const answer = String(progresion[questionPlace]);
  progresion[questionPlace] = '..';
  const question = String(progresion).replace(/,/g, ' ');

  return cons(question, answer);
};

const currentQuestion = currentRound => car(currentRound);
const currentAnswer = currentRound => cdr(currentRound);

export default () => gamePlay(task, currentData, currentQuestion, currentAnswer);
