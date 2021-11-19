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

const alterIsOpened = curry((property, isOpened, id, items) =>
  pipe(map(when(propEq("id", id), assoc(property, isOpened))))(items)
);

const RoleManagingView = (props) => {
  const gameOptions = toJS(props.gameStore.options);
  console.log(gameOptions);
  const locations = gameOptions.categories
    .map((option) => option.locations)
    .flat();

  const [randomLocationIndex] = useState(
    Math.round(Math.random() * locations.length - 1)
  );

  const location = useMemo(
    () => locations[randomLocationIndex],
    [locations, randomLocationIndex]
  );
  useEffect(
    () => location && props.gameStore.setLocation(location.name),
    [location]
  );
  const [cards, setCards] = useState(
    arrayShuffle([
      ...repeat(null, gameOptions.playersCont - gameOptions.spyesCount).map(
        () => {
          return {
            id: uuid(),
            value: propOr("-", "name", location),
            type: "location",
            description: pathOr(
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
        description: pathOr(
          "Default description",
          ["description", "spy"],
          gameOptions
        ),
        isOpened: false,
      })),
    ])
  );
  const history = useHistory();

  const handleClick = (id) => {
    toggleOpened(id);
  };
  const removeCard = (id) => {
    return cards.filter((card) => card.id !== id);
  };
  const toggleOpened = (id) => {
    if (pipe(find(propEq("id", id)), prop("isOpened"))(cards)) {
      return setCards(() => removeCard(id));
    }
    return setCards(() =>
      alterIsOpened(
        "isOpened",
        !cards.find((card) => card.id === id).isOpened,
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
    []
  );

  return (
    <>
      <div className="role-managing__card-wrapper">
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={cardTheme(card.isOpened)}
              style={{ left: 3 * index, top: 3 * index }}
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
    </>
  );
};

RoleManagingView.propTypes = {
  cards: PropTypes.array,
  gameStore: PropTypes.object,
};

export default observer(RoleManagingView);
