import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Select, InputNumber, Switch } from "antd";
import usePromise from "react-use-promise";
import { getCategories } from "../client";
import { pathOr } from "ramda";
import { useHistory, Link } from "react-router-dom";
import routes from "../routes";
import { LeftOutlined } from "@ant-design/icons";

const { Option } = Select;

const defaultSettings = {
  id: 1,
  playersCont: 4,
  spyesCount: 1,
  isTimerNeeded: true,
  timer: 5,
  isFirstMemberChoiseNeeded: false,
  isRolesNeeded: false,
  categories: [],
  isHelpQuestionsNeeded: false,
};

// вынести в utils
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Вынести в src/pages, описать props
const NewGameView = (props) => {
  // деструктуризация props
  // сделать структуру - блок useState, блок хуков, функции
  const [result] = usePromise(getCategories, []); // отказаться от promise и через useGetCategories получать данные, получать loading и все такое
  const [gameSettings, setGameSettings] = useState(defaultSettings);
  const history = useHistory(); //  получать только push
  const setGame = (gameSetting) => () => {// useCallback
    props.gameStore.setGameOptions(gameSetting);
    props.gameStore.setLocation(gameSetting.categories.at(randomIntFromInterval(0, gameSetting.categories.length - 1)))
    history.push(routes.roleManaging);
  };
  const handleChangeCategories = (categories) => (selected) => { // непонятно зачем { } и return, использовать prevState и useCallback
    return setGameSettings(() => ({ 
      ...gameSettings,
      categories: categories.filter((category) =>
        selected.includes(String(category.id)) // использовать ramda includes
      ),
    }));
  };
  const handleChange = (prop) => (value) => { // useCallback
    setGameSettings(() => ({
      ...gameSettings,//использовать prevState
      [prop]: value,
    }));
  };

  const isSubmitDisabled = useMemo(
    () => !gameSettings.categories.length,
    [gameSettings.categories]
  ); // слишком маленькое условия, не обязательно создавать новую переменную

  return (
    <div className="df fdc">
      <Button type="link" className="btn-shadowed">
        <Link to={routes.main}>
          <LeftOutlined />
        </Link>
      </Button>
      <h1>Новая игра</h1>
      //  Вынести форму в отдельный компонент в src/page/NewGame/components
      <Form layout="horizontal" onFinish={setGame(gameSettings)}>
        <Form.Item label="Игроков">
          <InputNumber
            min={3}
            defaultValue={gameSettings.playersCont}
            onChange={handleChange("playersCont")}
          />
        </Form.Item>
        <Form.Item label="Шпионов">
          <InputNumber
            min={1}
            defaultValue={gameSettings.spyesCount}
            onChange={handleChange("spyesCount")}
          />
        </Form.Item>
        <Form.Item label="Продолжительность игры">
          <InputNumber
            min={1}
            defaultValue={gameSettings.timer}
            onChange={handleChange("timer")}
          />
        </Form.Item>
        <Form.Item label="Использовать таймер">
          <Switch
            disabled
            checked={gameSettings.isTimerNeeded}
            onChange={handleChange("isTimerNeeded")}
          />
        </Form.Item>
        <Form.Item label="Выбор первого игрока">
          <Switch
            disabled
            checked={gameSettings.isFirstMemberChoiseNeeded}
            onChange={handleChange("isFirstMemberChoiseNeeded")}
          />
        </Form.Item>
        <Form.Item label="Использовать роли">
          <Switch
            disabled
            checked={gameSettings.isRolesNeeded}
            onChange={handleChange("isRolesNeeded")}
          />
        </Form.Item>
        <Form.Item label="Категории" required>
          <Select
            mode="multiple"
            onChange={handleChangeCategories(
              pathOr([], ["categories"], result)
            )}
            className="new-game__selector"
          >
              //вынести в renderOptions и использовать List
            {pathOr([], ["categories"], result).map((category) => (
              <Option key={category.id}>{category.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Подсказывать вопросы">
          <Switch
            disabled
            checked={gameSettings.isHelpQuestionsNeeded}
            onChange={handleChange("isHelpQuestionsNeeded")}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="new-game__submit"
            disabled={isSubmitDisabled}
          >
            Начать игру
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

NewGameView.propTypes = {
  categories: PropTypes.array,
  gameStore: PropTypes.object,
};

export default NewGameView;
