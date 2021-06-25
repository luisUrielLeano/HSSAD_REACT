import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import GlobalStyles from '../globalStyles';

import ProtectedRoute from '../common/ProtectedRoute';
import AuthProvider from '../context/AuthContext';

const Login = lazy( () => import('../components/Login'));
const Home = lazy( () => import('../components/Home'));
const AdminPage = lazy( () => import('../components/AdminPage'));
const Survey = lazy( () => import('../components/Survey'));

const Router = () => {
    return (
    <Suspense fallback={null}>
        <GlobalStyles />
        <Switch>
            <Route exact path='/survey' component={ Survey } />
            <Route exact path='/' component={ Home } />
            <AuthProvider>
                <Route path='/login' component={ Login } />
                <ProtectedRoute path='/adminPage' component={ AdminPage } />
            </AuthProvider>
        </Switch>
    </Suspense>
    );
};

export default Router;
