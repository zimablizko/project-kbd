import { useDispatch, useSelector } from 'react-redux';
import { GAME_DATA } from '../consts/game-data';
import type { GameStage } from '../consts/game-data.model';
import { incrementStage } from '../store/game-state';
import { GameState } from '../store/model/game-state.model';

const GameStage = () => {
  const gameState = useSelector((state: { gamestate: GameState }) => state.gamestate);
  const dispatch = useDispatch();
  const gameStage = GAME_DATA.stages[gameState.currentstage as number] as GameStage;
  console.log('Game Stage:', gameStage);

  return (
    <div>
      <h1>{gameStage.title}</h1>
      <p>{gameStage.message}</p>

      <button onClick={() => dispatch(incrementStage())}>Next</button>
    </div>
  );
};

export default GameStage;
