import * as React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import routes from "../routes";

// Перенести в src/pages с названием Winner
// описать props
export const WinnerView = (props) => {
  const history = useHistory(); // достать push
  const moveToMain = () => {
    history.push(routes.main);
  };//  вынести SpyWin в src/pages/WinnerPage/components, вынести из компонента показ локации и сделать это отдельным компонентом
  const SpyWinner = (props) => ( // добавить useCallback
    <div className="role-managing__card-wrapper winner__spy">
      <Card onClick={moveToMain} className="role-managing__card">
        <h1>Выиграли шпионы</h1>
        // добавить поздравление шпионов, а то че их обделили
        <p>
          Загаданная локация: <span>{props.location}</span>
        </p>
      </Card>
    </div>
  );//  вынести PeopleWin в src/pages/WinnerPage/components
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
  const { options, location } = props.gameStore; // вынести в начало компонента

  console.log(options.side, location); // убрать

  // добавить функцию const RenderWinPage = useCallback(() => {
  //   return (
  //  {
  //    'spy' : , <SpyWin />
  //    'people': <PeopleWin /> ?не уверен до конца, что people
  //   }[options.winner]
  //   )
  //}, [options.winner])

  return options.winner === "spy" ? (
    <SpyWinner location={location} />
  ) : (
    <PeopleWinner location={location} />
  );
};
