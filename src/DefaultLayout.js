import React, { useContext, useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import Routes from './Routes';
import './styles/DefaultLayout.css';
import DataContext from './context/DataContext';
import isEmpty from './helpers/isEmpty';
import Loading from './components/Loading';
import Text from 'antd/lib/typography/Text';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const DefaultLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
  const { units, actualUser, actualUnit, setActualUnit, company } = useContext(DataContext);

	return (
    <>
    {(!isEmpty(actualUser) && actualUnit) ?
      (<Layout>
        <Header className="header">
          <div className="logo">
            <Text>{(company[0].name).toUpperCase()}</Text>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Visão Geral</Menu.Item>
            <Menu.Item key="2">Ativos</Menu.Item>
            <Menu.Item key="3">Ordens de Serviço</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={200} className="site-layout-background">
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              defaultSelectedKeys={[`${actualUnit}`]}
              defaultOpenKeys={['sub1', 'sub2']}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Usuário">
                {<Menu.Item key="0" disabled>{actualUser.name}</Menu.Item>}
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Unidade">
                {units.map((unit, index) => (
                    <Menu.Item
                      key={index + 1}
                      onClick={(e) => setActualUnit(+e.key)}
                    >
                      {unit.name}
                    </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px 24px 24px' }}>
            <Routes />
          </Layout>
        </Layout>
      </Layout>)
  : <Loading />}
  </>
	);
}

export default DefaultLayout;
