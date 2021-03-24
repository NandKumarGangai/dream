import React, { Suspense } from 'react';
import { Redirect, Route } from "react-router-dom";
import Loader from './components/SpinningLoader';
import { appRoutes } from './PageRoutes';
import { STORAGE } from './Utils/storage';
import './App.css';

const renderLoader = () => <Loader />;

const RedirectComponent = () => <Redirect to='/login' />;

const mapRoutes = ({ route, isPrivate, Component }) => {
    const isLogin = STORAGE.getToken() || false;
    console.log('login status: ', isLogin);

    return (<Route
        exact path={route}
        render={props => (
            isPrivate && STORAGE.getToken()
                ? <Component {...props} />
                : (isPrivate ? <RedirectComponent /> : <Component />)
        )}
    />);
}

const createRoutes = (appRoutes) => appRoutes.map(mapRoutes);

const App = () => {
    return (
        <Suspense fallback={renderLoader()}>
            {
                createRoutes(appRoutes)
            }
        </Suspense>
    );
}

export default App;
