import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import GlobalStyles from '../globalStyles';

import ProtectedRoute from '../common/ProtectedRoute';
import AuthProvider from '../context/AuthContext';

const Login = lazy( () => import('../components/Login'));
const Home = lazy( () => import('../components/Home'));
const AdminPage = lazy( () => import('../components/AdminPage'));

const Router = () => {
    return (
    < Suspense fallback={null}>
        <GlobalStyles />
        <Switch>
            <Route exact path='/Home' component={ Home } />
            <AuthProvider>
                <Route exact path='/login' component={ Login } />
                <ProtectedRoute exact path='/adminPage' component={ AdminPage } />
            </AuthProvider>
        </Switch>
    </ Suspense >
    );
};

export default Router;
