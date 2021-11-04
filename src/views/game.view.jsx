import React from "react";
import { Button } from "antd";
import { addMinutes, format, startOfHour, startOfMinute } from "date-fns";
import { useCountdownTimer } from "use-countdown-timer";
import { Link } from "react-router-dom";
import routes from "../routes";
import { PropTypes } from "mobx-react";
import { toJS } from "mobx";
import {
  PauseOutlined,
  CaretRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const GameView = (props) => {
  const gameStore = props.gameStore.options;
  const { countdown, start, pause, isRunning, onExpire } = useCountdownTimer({
    timer: 1000 * 60 * toJS(gameStore.timer),
  });
  const spyText =
    gameStore.spyesCount > 1 ? "Выиграли шпионы" : "Выиграл шпион";
  return (
    <div className="df fdc">
      <span className="game__counter">
        {Math.floor((countdown % 36e5) / 6e4)
          .toString()
          .padStart(2, "0")}{" "}
        :{" "}
        {Math.floor((countdown % 6e4) / 1000)
          .toString()
          .padStart(2, "0")}
      </span>
      <div className="game__controls">
        <div>
          {isRunning ? (
            <Button onClick={pause} className="btn-shadowed btn-small">
              <PauseOutlined />
            </Button>
          ) : (
            <Button onClick={start} className="btn-shadowed btn-small">
              <CaretRightOutlined />
            </Button>
          )}
        </div>
        <div>
          <Button className="btn-shadowed btn-small">
            <Link to={routes.main}>
              <CloseOutlined />
            </Link>
          </Button>
        </div>
      </div>
      <div className="game__result">
        <Button className="btn-error btn-small">{spyText}</Button>
        <Button className="btn-small">Выиграли мирные</Button>
      </div>
    </div>
  );
};

GameView.propTypes = {
  gameStore: PropTypes.object,
};

export default GameView;
