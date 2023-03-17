import { RouteProps } from 'react-router-dom';
import {
    AboutPage, MainPage, NotFound, ProfilePage, 
} from 'pages';

export enum EAppRoutes {
    Main = 'main',
    About = 'about',
    Profile = 'profile',
    NotFound = 'notFound'
}

export const RoutPath: Record<EAppRoutes, string> = {
    [EAppRoutes.Main]: '/',
    [EAppRoutes.About]: '/about',
    [EAppRoutes.Profile]: '/profile',
    [EAppRoutes.NotFound]: '*',
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.Main]: {
        path: RoutPath.main,
        element: <MainPage />,
    },
    [EAppRoutes.About]: {
        path: RoutPath.about,
        element: <AboutPage />,
    },
    [EAppRoutes.Profile]: {
        path: RoutPath.profile,
        element: <ProfilePage />,
    },
    [EAppRoutes.NotFound]: {
        path: RoutPath.notFound,
        element: <NotFound />,
    },
};
