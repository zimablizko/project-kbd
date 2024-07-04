export type GameState = {
  currentstage: number;
  coins: number;
  currentLocation: PlayerLocation;
};

export type PlayerLocation = {
  lat: number;
  long: number;
};

export type StateAction = {
  type: string;
  payload: string;
};
