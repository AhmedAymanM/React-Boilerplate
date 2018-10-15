import React from 'react';
import { Layout } from 'antd';
// import Hello from "../Hello";
import NavBar from './NavBar/NavBar';
import ExampleContent from '../../features/example/ExampleContent';
import SideNav from '../../common/SideNav/SideNav';
import Header from '../../common/Header/Header';
import './exampleLayout.scss';

const { Sider } = Layout;

const ExampleLayout = () => (
  <Layout className="example-layout">
    <Header />
    <Layout>
      <Sider
        className="example-layout__side-nav"
        collapsedWidth={60}
        width={180}
        collapsible
        defaultCollapsed
      >
        <SideNav />
      </Sider>
      <Layout className="example-layout__content">
        <NavBar />
        <div className="example-layout__grid-container">
          <ExampleContent />
        </div>
      </Layout>
    </Layout>
  </Layout>
);

export default ExampleLayout;
