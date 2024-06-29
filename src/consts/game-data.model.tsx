export type GameData = {
  stages: {
    [key: number]: GameStage;
  };
};

export type GameStage = {
  title: string;
  message: string;
  nextCondition: {
    answer: string | null;
    location: {
      lat: number;
      long: number;
    } | null;
  };
};
