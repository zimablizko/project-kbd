import { PlayerLocation } from '../store/model/game-state.model';

export type GameData = {
  settings: {
    debugMode: boolean;
    minDistance: number;
    hintCost: number;
    hintLevelBonus: number;
  };
  stages: {
    [key: number]: GameStage;
  };
};

export type GameStage = {
  title: string;
  message: string;
  hint?: string;
  nextCondition: {
    answer: string | null;
    location: PlayerLocation | null;
    minDistance: number | null;
  };
};
