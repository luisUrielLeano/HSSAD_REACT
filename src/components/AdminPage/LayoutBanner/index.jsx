import React, { useContext } from 'react';
import {
    LogoutOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { getUsernameAvatar } from '../UserAvatar';
import * as S from './styles';

const { SubMenu } = Menu;
const { Header } = Layout;

const LayoutBanner =({ collapsed, handleOnCollapse }) => {
    const history = useHistory();
    const { auth } = useContext(AuthContext);

    const handleLogout = () => {
        history.replace('/');
    };

    const handleSettingMenuClick = () => {};
    return(
        <Header style= {{ background: '#ffff', padding: 0, display:'flex', justifyContent:'flex-end'}}>
            <S.StyledMenu onClick={handleSettingMenuClick} mode='horizontal'>
                <SubMenu title={getUsernameAvatar(auth.user.username)}>
                    <Menu.Item key='setting:1'>
                        <span>
                            <UserOutlined />
                        </span>
                        {auth.user.username}
                    </Menu.Item>
                    <Menu.Item onClick={handleLogout} key='setting:2'>
                        <span>
                            <LogoutOutlined />
                            Logout
                        </span>
                    </Menu.Item>
                </SubMenu>
            </S.StyledMenu>
        </Header>
    );
};

export default LayoutBanner;