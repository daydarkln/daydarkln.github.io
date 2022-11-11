import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import {
  assoc,
  curry,
  find,
  map,
  pathOr,
  pipe,
  prop,
  propEq,
  propOr,
  repeat,
  when,
} from "ramda";
import routes from "../routes";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import uuid from "uuid-random";
import { toJS } from "mobx";
import arrayShuffle from "array-shuffle";
import classNames from "classnames";

const { Meta } = Card;

// использовать эту функцию из src/utils
const alterIsOpened = curry((property, isOpened, id, items) =>
  pipe(map(when(propEq("id", id), assoc(property, isOpened))))(items)
);

// использовать эту функцию из src/utils
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// описание props
// перенести в src/pages и переименовать в RoleManaging
const RoleManagingView = (props) => {
  // деструктуризация props
  const gameOptions = toJS(props.gameStore.options); // получаем из apollo-cache
  console.log(gameOptions); // - удалить
  const location = toJS(props.gameStore.location.locations)[randomIntFromInterval(0,props.gameStore.location.locations.length - 1)] // получаем из apollo-cache

  console.log('location', location); // - удалить

  const [cards, setCards] = useState(
    //  необходимо описать работу это элемента кода
    arrayShuffle([// create function shuffle in src/utils
      ...repeat(null, gameOptions.playersCont - gameOptions.spyesCount).map(
        () => { // можно избавить от return и {}
          return {
            id: uuid(),
            value: propOr("-", "name", location),
            type: "location",
            description: pathOr(//  вынести проверку в функцию
              "Default description",
              ["description", "location"],
              gameOptions
            ),
            isOpened: false,
          };
        }
      ),
      ...repeat(null, gameOptions.spyesCount).map(() => ({
        id: uuid(),
        type: "spy",
        description: pathOr( //  вынести проверку в функцию
          "Default description",
          ["description", "spy"],
          gameOptions
        ),
        isOpened: false,
      })),
    ])
  );//нет отступа
  const history = useHistory(); //достать только push

  const handleClick = (id) => { // useCallback
    toggleOpened(id);
  };//нет отступа
  const removeCard = (id) => { // useCallback
    return cards.filter((card) => card.id !== id); // переделать в  ramda filter
  };//нет отступа
  const toggleOpened = (id) => {
    if (pipe(find(propEq("id", id)), prop("isOpened"))(cards)) {
      return setCards(() => removeCard(id)); // переделать removeCard и избавиться от стр функ
    }
    return setCards(() =>
        // вынести проверку card.id === id сюда в переменную
      alterIsOpened(
        "isOpened",
        !cards.find((card) => card.id === id).isOpened, // использовать find из ramda
        id,
        cards
      )
    );
  };

  useEffect(() => {
    if (!cards.length) {
      history.push(routes.game);
    }
  }, [cards]);

  const cardTheme = useCallback(
    (isOpened) =>
      classNames(
        "role-managing__card",
        isOpened ? "role-managing__card--opened" : "",
        "card"
      ),
    [] // isOpened зависимость
  );

  return (
    <>// лишнее
      <div className="role-managing__card-wrapper">
        // Использовать компонент List, в самом компоненте учесть различные сценарии передаваемых объектов,
        // либо сделать renderItem и передавать туда JSX элемент для рендера
        {cards.map((card, index) => {
        // сделать деструктуризацию card
          return (
            <Card
              key={card.id}
              onClick={() => handleClick(card.id)} // переделать handleСlick и избавиться от стр функц
              className={cardTheme(card.isOpened)}
              style={{ left: 3 * index, top: 3 * index }} // убрать inline стили
            >
              {card.isOpened ? (
                <Meta
                  title={card.type === "location" ? card.value : "Вы шпион"}
                  description={card.description}
                  className="role-managing__meta"
                />
              ) : (
                "Посмотри, что внутри"
              )}
            </Card>
          );
        })}
      </div>
    </>// лишнее
  );
};

RoleManagingView.propTypes = {
  cards: PropTypes.array,
  gameStore: PropTypes.object,
};

export default observer(RoleManagingView);
