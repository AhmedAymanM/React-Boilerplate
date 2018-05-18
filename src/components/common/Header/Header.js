import React from "react";
import UserMenu from "./UserMenu/UserMenu";
import "./header.scss";

const Header = () => (
  <div className="header">
    <img
      className="header__logo"
      alt="course cover"
      src="https://ifhgolf.com/wp-content/uploads/2017/04/placeholder_logo_500x400.png"
    />
    <UserMenu />
  </div>
);
export default Header;
