import { cons, car, cdr } from '@hexlet/pairs';
import { gamePlay, randomNum } from '../index';

const task = 'Find the greatest common divisor of given numbers.';

const currentData = () => {
  const firstNum = randomNum(1, 101);
  const secondNum = randomNum(1, 101);

  const question = `${firstNum} ${secondNum}`;

  const checkCorrectAnswer = () => {
    let result;
    let devider;

    if (firstNum > secondNum) {
      devider = secondNum;
    }
    devider = firstNum;

    for (let x = devider; x > 0; x -= 1) {
      if (firstNum % x === 0 && secondNum % x === 0) {
        result = x;
        return String(result);
      }
    }
    return String(firstNum);
  };

  const answer = checkCorrectAnswer();

  return cons(question, answer);
};

const currentQuestion = currentRound => car(currentRound);
const currentAnswer = currentRound => cdr(currentRound);

export default () => gamePlay(task, currentData, currentQuestion, currentAnswer);
