import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const greatCommonDivisor = (first, second) => {
  let result;
  let devider;

  if (first > second) {
    devider = second;
  }
  devider = first;

  for (let i = devider; i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      result = i;
      return result;
    }
  }
  return first;
};

const makeRound = () => {
  const first = random(1, 100);
  const second = random(1, 100);

  const question = `${first} ${second}`;

  const answer = greatCommonDivisor(first, second);

  return cons(question, answer);
};

export default () => playGame(task, makeRound);
