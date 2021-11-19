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

const NewGameView = (props) => {
  const [result] = usePromise(getCategories, []);
  const [gameSettings, setGameSettings] = useState(defaultSettings);
  const history = useHistory();
  const setGame = (gameSetting) => () => {
    props.gameStore.setGameOptions(gameSetting);
    history.push(routes.roleManaging);
  };
  const handleChangeCategories = (categories) => (selected) => {
    return setGameSettings(() => ({
      ...gameSettings,
      categories: categories.filter((category) =>
        selected.includes(category.id)
      ),
    }));
  };
  const handleChange = (prop) => (value) => {
    setGameSettings(() => ({
      ...gameSettings,
      [prop]: value,
    }));
  };

  const isSubmitDisabled = useMemo(
    () => !gameSettings.categories.length,
    [gameSettings.categories]
  );

  return (
    <div className="df fdc">
      <Button type="link" className="btn-shadowed">
        <Link to={routes.main}>
          <LeftOutlined />
        </Link>
      </Button>
      <h1>Новая игра</h1>
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
