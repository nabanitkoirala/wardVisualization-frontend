import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    useParams,
} from 'react-router-dom';
import LandingPage from '../../admin/LandingPage';
import Login from '../../admin/Login';
import Dashboard from '../../Dashboard/index';





function PrivateRoute({ children }) {
    const auth = localStorage.getItem("UserLoginInformation");
    return auth ? children : <Navigate to="/login" />;
}
const PublicRoute = ({ children }) => {
    const auth = localStorage.getItem("UserLoginInformation");
    return auth ? <Navigate to="/dashboard" /> : children;
};


const Routing = () => {

    return (
        <BrowserRouter>

            <Routes>
                {/* <TopNavbar /> */}

                <Route exact path="/" element={

                    <Dashboard />

                } />
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <LandingPage />
                    </PrivateRoute>
                } />

            </Routes>

        </BrowserRouter>

    )
}


export default Routing;