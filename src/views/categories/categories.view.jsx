import { LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../client";
import { Category } from "../../components/Category";
import routes from "../../routes";

import "./style.css";

export const CategoriesView = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(async () => {
    const { categories } = await getCategories();
    setCategories(categories);
  }, []); 
  //отказаться от useEffect, заменив на хук useGetCategories
  return (
    //убрать лишние classNames и, при необходимости, подключить tailwind
    <div className="df fdc">
      <div className="df aic jcsb">
        <Button type="link" className="btn-shadowed">
    //сделать отдельный компонент Link и сделать в нем различные случаи: кнопка назад, текст, jsx element или children
          <Link to={routes.main}>
            <LeftOutlined />
          </Link>
        </Button>
        <h1 className="categories__heading">Список категорий</h1>
      </div>
      <List className="categories__list">
        {categories.length ? (
          categories.map((category) => (
            <List.Item key={category.id}>
              <Category {...category} />
            </List.Item>
          ))
        ) : (
          <LoadingOutlined style={{ fontSize: 24 }} spin /> //сделать кастомный loader чтобы отказаться от библиотеки ради производительности
        )}
      </List>
    </div>
  );
};
