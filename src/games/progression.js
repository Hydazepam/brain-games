import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, step, length) => {
  const progression = [];
  for (let n = 0; n < length; n += 1) {
    progression.push(start + step * n);
  }
  return progression;
};

const makeRound = () => {
  const start = random(1, 100);
  const step = random(1, 10);
  const questionIndex = random(0, progressionLength - 1);

  const progression = createProgression(start, step, progressionLength);
  const answer = String(progression[questionIndex]);
  progression[questionIndex] = '..';
  const question = progression.join(' ');

  return cons(question, answer);
};

export default () => playGame(task, makeRound);
