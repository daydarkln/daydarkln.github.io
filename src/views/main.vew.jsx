import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// Мы перенесли данные о пунктах меню сюда из App.jsx, сделать название - MainPage и перенести ее в src/pages
// опсиать props
const MainView = (props) => {
  //сделать деструктуризацию props
  return (
    <div className="df fdc">
      <h1>Шпион</h1>
      <ul mode="inline" className="main-view">
    //применить новый компонент List
        {props.menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MainView.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default MainView;
