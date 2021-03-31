import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../client';
import { Category } from '../../components/Category';
import routes from '../../routes';

import './style.css';

export const CategoriesView = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(async () => {
    const { categories } = await getCategories();
    setCategories(categories);
  }, []);
  return (
    <>
      <div className="df aic jcsb">
        <Button type="link">
          <Link to={routes.main}>
            <LeftOutlined />
          </Link>
        </Button>
        <h1>Список категорий</h1>
      </div>
      <List className="categories__list">
        {categories.length ? (
          categories.map((category) => (
            <List.Item key={category.id}>
              <Category {...category} />
            </List.Item>
          ))
        ) : (
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        )}
      </List>
    </>
  );
};
