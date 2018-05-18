import React from "react";
import { Button, Select, Icon } from "antd";
import "./navBar.scss";

const { Option, OptGroup } = Select;

const SelectPlaceholder = () => (
  <div>
    <Icon type="filter" style={{ padding: "2px" }} />
    <span> Choose Semester</span>
  </div>
);

const NavBar = () => (
  <div className="nav-bar">
    <h1 className="nav-bar__title">Dashboard</h1>
    <Select
      className="nav-bar__filter-action"
      showSearch
      placeholder={<SelectPlaceholder />}
      allowClear
      optionFilterProp="children"
      size="large"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <OptGroup label="2017">
        <Option value="Full 2017">Full</Option>
        <Option value="Summer 2017">Summer</Option>
        <Option value="Winter 2017">Winter</Option>
      </OptGroup>
      <OptGroup label="2016">
        <Option value="Full 2016">Full</Option>
        <Option value="Summer 2016">Summer</Option>
      </OptGroup>
    </Select>
    <Button className="nav-bar__button" type="primary" icon="plus" size="large">
      Add Class
    </Button>
  </div>
);
export default NavBar;
