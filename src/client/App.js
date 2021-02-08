import React, { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";

const renderLoader = () => <h1>Loading</h1>;
const LoginPageComponent = lazy(() => import('./pages/LoginComponent'));
const UserRegistrationComponent = lazy(() => import('./pages/UserRegistrationComponent'));
const ForgotPasswordComponent = lazy(() => import('./pages/ForgotPasswordComponent'));
const LandingPageComponent = lazy(() => import('./pages/LandingComponent'));

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Route exact path={["/", "/login"]}><LoginPageComponent /></Route>
      <Route exact path="/signup"><UserRegistrationComponent /></Route>
      <Route exact path="/forgot-password"><ForgotPasswordComponent /></Route>
      <Route exact path="/home"><LandingPageComponent /></Route>
    </Suspense>
  );
}

export default App;
