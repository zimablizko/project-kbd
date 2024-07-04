import { createSlice } from '@reduxjs/toolkit';
import { GAME_DATA } from '../consts/game-data';
import { saveManager } from '../utils/save-manager';
import { GameState, StateAction } from './model/game-state.model';

let initialState: GameState = {
  currentstage: 0,
  coins: 0,
  currentLocation: {
    lat: 0,
    long: 0,
  },
};

let maxStages = Object.keys(GAME_DATA.stages).length - 1;

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: saveManager.load('kbd_gameState') ?? (initialState as GameState),
  reducers: {
    incrementCoins: (state: GameState, action: StateAction) => {
      state.coins += +action.payload;
      console.log('Coins:', state.coins);
      saveManager.save('kbd_gameState', state);
    },
    incrementStage: (state: GameState) => {
      if (state.currentstage >= maxStages) {
        return;
      }
      state.currentstage += 1;
      saveManager.save('kbd_gameState', state);
    },
    setLocation: (state: GameState, action: StateAction) => {
      state.currentLocation = JSON.parse(action.payload);
      saveManager.save('kbd_gameState', state);
    },
    resetGame: () => {
      saveManager.reset('kbd_gameState');
      document.location.reload();
    },
  },
});

export default gameStateSlice.reducer;
export const { incrementCoins, incrementStage, resetGame, setLocation } = gameStateSlice.actions;