import { cons, car, cdr } from 'hexlet-pairs';
import { gamePlay, randomNum } from '../index';

const task = 'What is the result of the expression?';

const randomSign = (num) => {
  switch (num) {
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

const currentData = () => {
  const firstNum = randomNum(1, 101);
  const secondNum = randomNum(1, 101);
  const currentSign = randomSign(randomNum(1, 4));

  const question = `${firstNum} ${currentSign} ${secondNum}`;

  const checkCorrectAnswer = () => {
    let result;
    switch (currentSign) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '*':
        result = firstNum * secondNum;
        break;
      default:
        return 'default';
    }
    return String(result);
  };

  const answer = checkCorrectAnswer();

  return cons(question, answer);
};

const currentQuestion = currentRound => car(currentRound);
const currentAnswer = currentRound => cdr(currentRound);

export default () => gamePlay(task, currentData, currentQuestion, currentAnswer);
