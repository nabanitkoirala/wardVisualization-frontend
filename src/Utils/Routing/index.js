import React from 'react';
import TopNavbar from '../../Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summary from '../../Components/Summary';
import DistrictSummary from '../../Components/DistrictSummary';
import Dashboard from '../../Dashboard/index';

const Routing = () => {
    return (
        <div style={{ height: '100vh' }} >

            <Router>
                {/* <TopNavbar /> */}
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/district-summary" component={DistrictSummary} />
                </Switch>
            </Router>

        </div>

    )
}


export default Routing;