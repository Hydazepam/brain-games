import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const makeGame = () => {
  const first = random(1, 100);
  const second = random(1, 100);
  const currentSign = operations[random(0, operations.length - 1)];

  const question = `${first} ${currentSign} ${second}`;

  const checkCorrectAnswer = () => {
    let result;
    switch (currentSign) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      default:
        return 'default';
    }
    return String(result);
  };

  const answer = checkCorrectAnswer();

  return cons(question, answer);
};

export default () => playGame(task, makeGame);
