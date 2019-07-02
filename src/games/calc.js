import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateCorrectAnswer = (a, b, operation) => {
  let result;
  switch (operation) {
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
      return null;
  }
  return result;
};

const makeRound = () => {
  const first = random(1, 100);
  const second = random(1, 100);
  const operation = operations[random(0, operations.length - 1)];

  const question = `${first} ${operation} ${second}`;

  const answer = String(calculateCorrectAnswer(first, second, operation));

  return cons(question, answer);
};

export default () => playGame(task, makeRound);
