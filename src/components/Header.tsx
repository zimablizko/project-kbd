import { useDispatch } from 'react-redux';
import { resetGame } from '../store/game-state';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <button className={classes.button} onClick={() => dispatch(resetGame())}>
        New Game
      </button>
    </header>
  );
};

export default Header;
