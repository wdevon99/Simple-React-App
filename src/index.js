import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/containers/AppRouter';
import { Helmet } from 'react-helmet'
import './styles/styles.scss';

const MyApp = (
    <div>
        <Helmet>
            <title>React App for Nate</title>
            <meta name="description" content="Web site created using create-react-app for Nate and it contains two pages" />
            <meta name="keywords" content="keyword1,keyword2,keyword3" />
        </Helmet>
        <AppRouter />
    </div>

);

ReactDOM.render(MyApp, document.getElementById('root'));
