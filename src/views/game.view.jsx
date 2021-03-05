import React from 'react';
import { Button } from 'antd';
import { addMinutes, format, startOfHour, startOfMinute } from 'date-fns';
import { useCountdownTimer } from 'use-countdown-timer';
import { Link } from 'react-router-dom';
import routes from '../routes';
import { PropTypes } from 'mobx-react';
import { toJS } from 'mobx';

const GameView = (props) => {
  const gameStore = props.gameStore.options;
  const { countdown, start, pause, isRunning, } = useCountdownTimer({
    timer: 1000 * 60 * toJS(gameStore.timer),
  });
  return (
    <>
      {Math.floor((countdown % 36e5) / 6e4)} :{' '}
      {Math.floor((countdown % 6e4) / 1000)}
      <div>
        <Button onClick={start} disabled={isRunning}>
          Start
        </Button>
        <Button onClick={pause} disabled={!isRunning}>
          Pause
        </Button>
      </div>
      <div>
        <Button>
          <Link to={routes.main}>End game</Link>
        </Button>
      </div>
    </>
  );
};

GameView.propTypes = {
  gameStore: PropTypes.object,
};

export default GameView;
