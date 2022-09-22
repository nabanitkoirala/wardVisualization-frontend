import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../../Dashboard/index';

const Routing = () => {
    return (
        <div style={{ height: '100vh' }} >

            <Router>
                {/* <TopNavbar /> */}
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Router>

        </div>

    )
}


export default Routing;