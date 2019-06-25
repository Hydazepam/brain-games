import { gamePlay, randomNum } from '../index';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = randomNum(1, 501);

  const checkCorrectAnswer = () => {
    if (question > 1) {
      for (let n = 2; n < question; n += 1) {
        if (question % n === 0) {
          return 'no';
        }
      }
      return 'yes';
    }
    return 'no';
  };

  const answer = checkCorrectAnswer();

  return cons(question, answer);
};

const currentQuestion = currentRound => car(currentRound);
const currentAnswer = currentRound => cdr(currentRound);

export default () => gamePlay(task, currentData, currentQuestion, currentAnswer);
