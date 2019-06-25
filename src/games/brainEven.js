import { gamePlay, randomNum } from '../index';

const task = 'Answer "yes" if number even otherwise answer "no".';

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
  const question = randomNum(1, 101);

  const checkCorrectAnswer = () => {
    if (question % 2 === 0) {
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
