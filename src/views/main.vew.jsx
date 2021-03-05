import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MainView = (props) => {
  return (
    <Menu mode="inline" theme="dark">
      {props.menuItems.map((item) => (
        <Menu.Item key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
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
