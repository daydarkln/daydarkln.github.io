import React, { useState } from 'react';
import { Form, Button, Input, message } from 'antd';
import uuid from 'uuid-random';
import { assoc, curry, map, pipe, propEq, when } from 'ramda';
import { DeleteOutlined } from '@ant-design/icons';
import * as api from '../client';
import { Link } from 'react-router-dom';
import routes from '../routes';

const alterValue = curry((property, value, id, items) =>
  pipe(map(when(propEq('id', id), assoc(property, value))))(items)
);

const AddCategoryView = () => {
  const [locations, setLocations] = useState([{ id: uuid(), name: '' }]);
  const [category, setCategory] = useState({ name: '' });

  const addLocation = () =>
    setLocations([...locations, { id: uuid(), name: '' }]);

  const handleChangeName = (event) =>
    setCategory({
      name: event.target.value,
    });
  const handleChangeLocationName = (id) => (event) => {
    setLocations(alterValue('name', event.target.value, id, locations));
  };

  const removeLocation = (id) => () =>
    setLocations(locations.filter((location) => location.id !== id));

  const saveCategory = async () => {
    try {
      await api.saveCategory({ category, locations });
      message.success('Категория успешно добавлена');
    } catch (e) {
      console.error('Error is', e);
      message.error('Категория не добавлена');
    }
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={saveCategory}
    >
      <Form.Item label="Название">
        <Input onChange={handleChangeName} />
      </Form.Item>
      <Form.Item label="Локации">
        {locations.map(({ id, name }) => (
          <Form.Item key={id}>
            <Input onChange={handleChangeLocationName(id)} value={name} />
            {locations.length > 1 && (
              <Button size="small" onClick={removeLocation(id)}>
                <DeleteOutlined />
              </Button>
            )}
          </Form.Item>
        ))}
      </Form.Item>
      <Button type="text" onClick={addLocation}>
        Добавить локацию
      </Button>
      <Form.Item>
        <Button htmlType="submit">Добавить категорию</Button>
      </Form.Item>
      <Form.Item>
        <Button type="link">
          <Link to={routes.main}>Назад</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCategoryView;
