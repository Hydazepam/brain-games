import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculator = (a, b, c) => {
  let result;
  switch (c) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return 'default';
  }
  return result;
};

const makeRound = () => {
  const first = random(1, 100);
  const second = random(1, 100);
  const operation = operations[random(0, operations.length - 1)];

  const question = `${first} ${operation} ${second}`;

  const answer = calculator(first, second, operation);

  return cons(question, answer);
};

export default () => playGame(task, makeRound);
