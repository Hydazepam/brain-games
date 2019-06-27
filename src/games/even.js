import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const makeGame = () => {
  const question = random(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => playGame(task, makeGame);
