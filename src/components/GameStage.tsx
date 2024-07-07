import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME_DATA } from '../consts/game-data';
import type { GameStage } from '../consts/game-data.model';
import { addHint, incrementStage } from '../store/game-state';
import { GameState } from '../store/model/game-state.model';
import { getDistanceInMeter } from '../utils/location-helper';
import classes from './GameStage.module.css';

const GameStage = () => {
  const gameState = useSelector((state: { gamestate: GameState }) => state.gamestate);
  const dispatch = useDispatch();
  const gameStage = GAME_DATA.stages[gameState.currentstage as number] as GameStage;
  const [distance, setDistance] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  console.log('Game Stage:', gameStage);

  const minDistance = gameStage.nextCondition.minDistance ?? GAME_DATA.settings.minDistance;

  const nextDisabled: boolean =
    (!!gameStage.nextCondition.location && distance > minDistance) ||
    (!!gameStage.nextCondition.answer && !gameStage.nextCondition.answer.split('|').includes(answer.toLowerCase()));

  useEffect(() => {
    if (gameStage.nextCondition.location) {
      const distance = getDistanceInMeter(gameState.currentLocation, gameStage.nextCondition.location);
      setDistance(distance);
    }
  }, [gameState.currentLocation, gameStage.nextCondition.location]);

  const handleNext = async () => {
    setAnswer('');
    dispatch(incrementStage());
    const response = await fetch(
      'https://react-redux-db-20038-default-rtdb.europe-west1.firebasedatabase.app/game.json',
      {
        method: 'PUT',
        body: JSON.stringify(gameState),
      }
    );
    if (!response.ok) {
      console.log('Sending data failed.');
    }
  };

  const handleHint = () => {
    dispatch(addHint(gameState.currentstage.toLocaleString()));
  };

  return (
    <div className={classes.gamestage}>
      <h1 className={classes.title}>{gameStage.title}</h1>
      <div className={classes.message} dangerouslySetInnerHTML={{ __html: gameStage.message }} />

      {gameState.hints && gameState.hints.includes(gameState.currentstage) ? (
        <div className={classes.hint} dangerouslySetInnerHTML={{ __html: gameStage.hint! }} />
      ) : (
        gameStage.hint && (
          <button disabled={gameState.coins < GAME_DATA.settings.hintCost} onClick={() => handleHint()}>
            Подсказка ({GAME_DATA.settings.hintCost} 😺)
          </button>
        )
      )}

      {gameStage.nextCondition.location && <p>Дистанция: {distance} метров</p>}
      {gameStage.nextCondition.answer && (
        <input
          className={classes.input}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Ответ"
        />
      )}
      {gameState.currentstage < 14 && (
        <button disabled={nextDisabled} onClick={handleNext}>
          {gameStage.title === 'Birthday Quest' ? 'Начать' : 'Продолжить'}
        </button>
      )}

      {GAME_DATA.settings.debugMode && <button onClick={handleNext}>Admin Next</button>}
    </div>
  );
};

export default GameStage;
