import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
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
} from 'ramda';
import routes from '../routes';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import uuid from 'uuid-random';
import { toJS } from 'mobx';
import arrayShuffle from 'array-shuffle';

const { Meta, } = Card;

const alterIsOpened = curry((property, isOpened, id, items) =>
  pipe(map(when(propEq('id', id), assoc(property, isOpened))))(items)
);

const RoleManagingView = (props) => {
  const gameOptions = toJS(props.gameStore.options);
  console.log(gameOptions);
  const locations = gameOptions.categories
    .map((option) => option.locations)
    .flat();

  const randomLocationIndex = Math.round(Math.random() * locations.length - 1);

  const location = locations[randomLocationIndex];

  const [cards, setCards,] = useState(
    arrayShuffle([
      ...repeat(null, gameOptions.playersCont - gameOptions.spyesCount).map(
        () => {
          return {
            id: uuid(),
            value: propOr('', 'name', location),
            type: 'location',
            isOpened: false,
          };
        }
      ),
      ...repeat(null, gameOptions.spyesCount).map(() => ({
        id: uuid(),
        type: 'spy',
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
    if (pipe(find(propEq('id', id)), prop('isOpened'))(cards)) {
      return setCards(() => removeCard(id));
    }
    return setCards(() =>
      alterIsOpened(
        'isOpened',
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
  }, [cards,]);

  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          style={{ width: 300, }}
          onClick={() => handleClick(card.id)}
        >
          {card.isOpened ? (
            <Meta
              title={card.type === 'location' ? card.value : 'Вы шпион'}
              description="This is the description"
            />
          ) : (
            'Посмотри, что внутри'
          )}
        </Card>
      ))}
    </>
  );
};

RoleManagingView.propTypes = {
  cards: PropTypes.array,
  gameStore: PropTypes.object,
};

export default observer(RoleManagingView);
