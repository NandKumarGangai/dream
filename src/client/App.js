import React, { Suspense } from 'react';
import { Redirect, Route } from "react-router-dom";
import { appRoutes } from './PageRoutes';
import { STORAGE } from './Utils/storage';

const renderLoader = () => <h1>Loading</h1>;

const RedirectComponent = () => <Redirect to='/' />;

const mapRoutes = ({ route, isPrivate, Component }) => {
    const isUserLoggedIn = STORAGE.getToken() || false;

    return (<Route
        exact path={route}
        component={
            !isPrivate
                ? Component
                : (
                    isUserLoggedIn && isPrivate
                        ? Component
                        : RedirectComponent
                )
        }
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
