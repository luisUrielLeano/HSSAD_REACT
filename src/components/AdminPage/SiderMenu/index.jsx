import React,{ lazy }from 'react';
import { Layout, Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import{
    DashboardOutlined,
    TeamOutlined,
} from '@ant-design/icons';

import * as S from './styles.js';

const SvgIcon = lazy(() => import('../../../common/SvgIcon'));

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderMenu = () => {
    const { url } = useRouteMatch();

    return(
        <Sider 
            breakpoint='lg'
            collapsedWidth='80'
            width='256'
            theme='light'
        >
            <S.LogoContainer>
                <SvgIcon src='logo.svg' width='100rem' height='100rem'/>
            </S.LogoContainer>
            <Menu mode='inline' theme='light'>
                <Menu.Item key='dashboard'>
                    <DashboardOutlined />
                    <span><Link to={`${url}/dashboard`}>Dashboard</Link></span>
                </Menu.Item>
                <SubMenu
                    key='users'
                    title={
                        <span>
                            <TeamOutlined />
                            <span>Users</span>
                        </span>
                    }
                >
                    <Menu.Item key='showUsers'>
                        <span><Link to={`${url}/showUsers`}>Show Users</Link></span>
                    </Menu.Item>
                    <Menu.Item key='addUser'>
                        <span><Link to={`${url}/addUser`}>Add User</Link></span>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default SiderMenu;