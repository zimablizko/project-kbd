export type GameState = {
  currentstage: number;
  coins: number;
};

export type StateAction = {
  type: string;
  payload: number;
};
