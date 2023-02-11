import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage, NotFound } from 'pages';

export enum EAppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'notFound'
}

export const RoutPath: Record<EAppRoutes, string> = {
    [EAppRoutes.Main]: '/',
    [EAppRoutes.About]: '/about',
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
    [EAppRoutes.NotFound]: {
        path: RoutPath.notFound,
        element: <NotFound />,
    },
};
