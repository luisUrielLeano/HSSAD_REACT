import { Fragment, lazy } from 'react';

import Header from '../Header';
import IntroContent from '../Home/Content/IntroContent.json';

const Container = lazy(() => import('../../common/Container'));
const ContentBlock = lazy(() => import('../Home/ContentBlock'));

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                <ContentBlock
                    type='right'
                    first='true'
                    title={ IntroContent.title } 
                    content={ IntroContent.text }
                    button={ IntroContent.button }
                    icon='sadTime.svg'
                    id='intro'
                />
            </Container>
        </Fragment>
    );
};

export default Home;