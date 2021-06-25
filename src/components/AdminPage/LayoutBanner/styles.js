import styled from 'styled-components';
import { Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


export const SMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
    margin-left: 16px;
    margin-right: 16px;
    align-self: center;
`;

export const SMenuFoldOutlined = styled(MenuFoldOutlined)`
    margin-left: 16px;
    margin-right: 16px;
    align-self: center;
`;

export const StyledMenu = styled(Menu)`
    .ant-menu-horizontal {
        & > .ant-menu-submenu {
        float: right;
        }
        border: none;
    }
    box-shadow: #e4ecef;
    position: relative;
    .ant-menu-submenu-title {
        width: 64px;
        height: 64px;
        padding-top: 8px;
    }
`