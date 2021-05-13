import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 

import routes from './config';
import GlobalStyles from '../globalStyles';

const Router = () => {
    return (
    < Suspense fallback={null}>
        <GlobalStyles />
        <Switch>
            {routes.map((routeItem) => {
                return (
                    <Route
                        key={ routeItem.componet }
                        path={ routeItem.path } 
                        exact={ routeItem.exact }
                        component={ lazy(() => import(`../components/${routeItem.component}`))}
                    />
                );
            })}
        </Switch>
    </ Suspense >
    );
};

export default Router;
