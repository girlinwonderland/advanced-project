import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';

export enum EAppRoutes {
    Main = 'main',
    About = 'about'
}

export const RoutPath: Record<EAppRoutes, string> = {
    [EAppRoutes.Main]: '/',
    [EAppRoutes.About]: '/about',
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
};
