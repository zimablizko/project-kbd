import { GameData } from './game-data.model';

export const GAME_DATA: GameData = {
  stages: {
    0: {
      title: 'Stage 0',
      message: 'Ready to start?',
      nextCondition: {
        answer: null,
        location: null,
      },
    },
    1: {
      title: 'Stage 1',
      message: 'First stage',
      nextCondition: {
        answer: 'a',
        location: null,
      },
    },
    2: {
      title: 'Stage 2',
      message: 'First stage',
      nextCondition: {
        answer: null,
        location: {
          lat: 0,
          long: 0,
        },
      },
    },
  },
};
