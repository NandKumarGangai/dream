import { lazy } from 'react';

const LoginPageComponent = lazy(() => import('../pages/LoginComponent'));
const UserRegistrationComponent = lazy(() => import('../pages/UserRegistrationComponent'));
const ForgotPasswordComponent = lazy(() => import('../pages/ForgotPasswordComponent'));
const LandingPageComponent = lazy(() => import('../pages/LandingComponent'));

export const appRoutes = [
    {
        route: '/',
        isPrivate: false,
        Component: LoginPageComponent
    },
    {
        route: '/login',
        isPrivate: false,
        Component: LoginPageComponent
    },
    {
        route: '/signup',
        isPrivate: false,
        Component: UserRegistrationComponent
    },
    {
        route: '/forgot-password',
        isPrivate: false,
        Component: ForgotPasswordComponent
    },
    {
        route: '/home',
        isPrivate: true,
        Component: LandingPageComponent
    }
];
