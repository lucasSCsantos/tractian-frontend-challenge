import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import Routes from './Routes';
import './styles/DefaultLayout.css';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const DefaultLayout = () => {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      </Menu>
    </Header>
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuário">
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Unidade">
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      </Layout>
			<Routes />
    </Layout>
  </Layout>
	);
}

export default DefaultLayout;
