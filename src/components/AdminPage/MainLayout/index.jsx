import React, { useState } from 'react';
import { Route, useParams, useRouteMatch, Switch} from 'react-router-dom';

import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import LayoutBanner from '../LayoutBanner';
import Dashboard from '../Dashboard';
import ShowUsers from '../Users/ShowUsers';
import AddUser from '../Users/AddUser';

const { Content } = Layout;

const MainLayout = () => {
    const { path } = useRouteMatch();
    const [collapsed, setCollapsed] = useState(false);

    const handleOnCollapse = () => {
        setCollapsed(prevState => !prevState)
    };

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <SiderMenu/>
            <Layout>
                <LayoutBanner
                    collapsed={collapsed}
                    handleOnCollapse={handleOnCollapse}
                />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ paddingTop: 24, background: '#fff', minHeight: 20}}>
                        <Switch>
                            <Route path={`${path}/dashboard`} exact component={Dashboard}/>
                            <Route path={`${path}/showUsers`} exact component={ShowUsers}/>
                            <Route path={`${path}/addUser`} exact component={AddUser}/>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;