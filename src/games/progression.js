import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const makeGame = () => {
  const start = random(1, 100);
  const step = random(1, 10);
  const questionPlace = random(0, progressionLength - 1);

  const progressionData = () => {
    const result = [];
    for (let n = 0; n < progressionLength; n += 1) {
      const element = start + step * n;
      result.push(element);
    }
    return result;
  };

  const progression = progressionData();
  const answer = String(progression[questionPlace]);
  progression[questionPlace] = '..';
  const question = progression.join(' ');

  return cons(question, answer);
};

export default () => playGame(task, makeGame);
