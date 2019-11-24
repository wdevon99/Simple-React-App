import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

 class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/index' component={Page1} exact={true} />
                    <Route path='/inner-page' component={Page2} exact={true} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
