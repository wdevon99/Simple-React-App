import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/containers/AppRouter';
import { Helmet } from 'react-helmet'
import './styles/styles.scss';

const MyApp = (
    <div>
        <AppRouter />
    </div>

);

ReactDOM.render(MyApp, document.getElementById('root'));
