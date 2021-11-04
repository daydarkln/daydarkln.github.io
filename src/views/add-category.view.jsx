import React, { useMemo, useState } from "react";
import { Form, Button, Input, message } from "antd";
import uuid from "uuid-random";
import { assoc, curry, map, pipe, propEq, when } from "ramda";
import { DeleteOutlined } from "@ant-design/icons";
import * as api from "../client";
import { Link } from "react-router-dom";
import routes from "../routes";
import { PlusOutlined } from "@ant-design/icons";

const alterValue = curry((property, value, id, items) =>
  pipe(map(when(propEq("id", id), assoc(property, value))))(items)
);

const AddCategoryView = () => {
  const [locations, setLocations] = useState([{ id: uuid(), name: "" }]);
  const [category, setCategory] = useState({ name: "" });

  const addLocation = () =>
    setLocations([...locations, { id: uuid(), name: "" }]);

  const handleChangeName = (event) =>
    setCategory({
      name: event.target.value,
    });
  const handleChangeLocationName = (id) => (event) => {
    setLocations(alterValue("name", event.target.value, id, locations));
  };

  const removeLocation = (id) => () =>
    setLocations(locations.filter((location) => location.id !== id));

  const saveCategory = async () => {
    try {
      await api.saveCategory({ name: category.name, locations });
      message.success("Категория успешно добавлена");
    } catch (e) {
      console.error("Error is", e);
      message.error("Категория не добавлена");
    }
  };

  const isAddButtonDisabled = useMemo(
    () => !category.name || !locations.find((location) => location.name),
    [name, locations]
  );
  return (
    <Form layout="vertical" onFinish={saveCategory}>
      <Form.Item>
        <Input
          onChange={handleChangeName}
          placeholder="Название"
          size="large"
        />
      </Form.Item>
      <Form.Item label="Локации" className="df fdc">
        {locations.map(({ id, name }) => (
          <div className="df" key={id} style={{ paddingBottom: 3 }}>
            <Input onChange={handleChangeLocationName(id)} value={name} />
            {locations.length > 1 && (
              <Button
                size="small"
                onClick={removeLocation(id)}
                className="btn-xsmall"
              >
                <DeleteOutlined />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="link"
          onClick={addLocation}
          className="btn-xsmall"
          style={{ margin: "0 auto" }}
        >
          <PlusOutlined />
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          className="btn-small"
          disabled={isAddButtonDisabled}
        >
          Добавить категорию
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="text" className="btn-small">
          <Link to={routes.main}>Назад</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCategoryView;
