import { PlayerLocation } from '../store/model/game-state.model';

export type GameData = {
  settings: {
    debugMode: boolean;
    minDistance: number;
  };
  stages: {
    [key: number]: GameStage;
  };
};

export type GameStage = {
  title: string;
  message: string;
  nextCondition: {
    answer: string | null;
    location: PlayerLocation | null;
  };
};
