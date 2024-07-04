import { useDispatch } from 'react-redux';
import { GAME_DATA } from '../consts/game-data';
import { resetGame } from '../store/game-state';
import classes from './Header.module.css';
import LocationTracker from './LocationTracker';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      {GAME_DATA.settings.debugMode && (
        <button className={classes.button} onClick={() => dispatch(resetGame())}>
          New Game
        </button>
      )}

      <LocationTracker></LocationTracker>
    </header>
  );
};

export default Header;
