import React from 'react';
import { Avatar, Dropdown, Menu, Icon } from 'antd';
import './userMenu.scss';

const menu = (
  <Menu>
    <Menu.Item>
      <Icon type="user" />
      <span> Profile</span>
    </Menu.Item>
    <Menu.Item>
      <Icon type="setting" />
      <span> Settings</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Icon type="logout" />
      <span> Sign out</span>
    </Menu.Item>
  </Menu>
);

const UserMenu = () => (
  <Dropdown overlay={menu} placement="bottomRight">
    <div className="user-menu">
      <div>Ahmed Ayman</div>
      <Avatar
        src="https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png"
        className="user-menu__avatar"
      />
    </div>
  </Dropdown>
);
export default UserMenu;
