import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import Router from './router/';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
