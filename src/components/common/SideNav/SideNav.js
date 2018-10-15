import React from 'react';
import { Menu, Icon } from 'antd';
import './sideNav.scss';

const MenuItem = Menu.Item;

const SideNav = () => (
  <Menu
    className="side-nav"
    defaultSelectedKeys={['1']}
    mode="inline"
    inlineIndent="20"
  >
    <MenuItem key="1">
      <Icon type="home" />
      <span>Dashboard</span>
    </MenuItem>
    <MenuItem key="2">
      <Icon type="calendar" />
      <span>Schedule</span>
    </MenuItem>
    <MenuItem key="3">
      <Icon type="calculator" />
      <span>Grades</span>
    </MenuItem>
    <MenuItem key="4">
      <Icon type="team" />
      <span>Classes</span>
    </MenuItem>
  </Menu>
);
export default SideNav;
