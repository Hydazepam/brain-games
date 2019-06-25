import { cons, car, cdr } from 'hexlet-pairs';
import { gamePlay, randomNum } from '../index';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
