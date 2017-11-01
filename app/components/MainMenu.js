import React, { Component } from 'react';
import {Menu} from 'antd';
import {Link } from 'react-router-dom'

class MainMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item key="1">
          <Link to="/Product">Products</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Inventory">Inventory</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default MainMenu;
