import * as React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import routes from "../routes";

export const WinnerView = (props) => {
  const history = useHistory();
  const moveToMain = () => {
    history.push(routes.main);
  };
  const SpyWinner = (props) => (
    <div className="role-managing__card-wrapper winner__spy">
      <Card onClick={moveToMain} className="role-managing__card">
        <h1>Выиграли шпионы</h1>
        <p>
          Загаданная локация: <span>{props.location}</span>
        </p>
      </Card>
    </div>
  );
  const PeopleWinner = (props) => (
    <div className="role-managing__card-wrapper winner__people">
      <Card onClick={moveToMain} className="role-managing__card">
        <h1>Выиграли мирные люди</h1>
        <p>Поздравляю</p>
        <p>
          Загаданная локация: <span>{props.location}</span>
        </p>
      </Card>
    </div>
  );
  const { options, location } = props.gameStore;

  console.log(options.side, location);

  return options.winner === "spy" ? (
    <SpyWinner location={location} />
  ) : (
    <PeopleWinner location={location} />
  );
};
