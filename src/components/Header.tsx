import { useDispatch, useSelector } from 'react-redux';
import { GAME_DATA } from '../consts/game-data';
import { incrementCoins, resetGame } from '../store/game-state';
import { GameState } from '../store/model/game-state.model';
import classes from './Header.module.css';
import LocationTracker from './LocationTracker';

const Header = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: { gamestate: GameState }) => state.gamestate);

  return (
    <header className={classes.header}>
      {GAME_DATA.settings.debugMode && (
        <button className={classes.button} onClick={() => dispatch(resetGame())}>
          New Game
        </button>
      )}
      <div className={classes.currency} onClick={() => dispatch(incrementCoins('1'))}>
        😺: {gameState.coins}
      </div>

      <LocationTracker></LocationTracker>
    </header>
  );
};

export default Header;
