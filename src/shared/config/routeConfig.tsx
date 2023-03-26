import { RouteProps } from 'react-router-dom';
import {
    AboutPage, MainPage, NotFound, ProfilePage, ArticlesPage, ArticleDetailsPage,
} from 'pages';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum EAppRoutes {
    Main = 'main',
    About = 'about',
    Profile = 'profile',
    Articles = 'articles',
    Articles_Details = 'article_details',
    NotFound = 'notFound'
}

export const RoutPath: Record<EAppRoutes, string> = {
    [EAppRoutes.Main]: '/',
    [EAppRoutes.About]: '/about',
    [EAppRoutes.Profile]: '/profile/',
    [EAppRoutes.Articles]: '/articles',
    [EAppRoutes.Articles_Details]: '/articles/',
    [EAppRoutes.NotFound]: '*',
};

export const routeConfig: Record<EAppRoutes, AppRoutesProps> = {
    [EAppRoutes.Main]: {
        path: RoutPath.main,
        element: <MainPage />,
    },
    [EAppRoutes.About]: {
        path: RoutPath.about,
        element: <AboutPage />,
    },
    [EAppRoutes.Profile]: {
        path: `${RoutPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [EAppRoutes.Articles]: {
        path: RoutPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [EAppRoutes.Articles_Details]: {
        path: `${RoutPath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [EAppRoutes.NotFound]: {
        path: RoutPath.notFound,
        element: <NotFound />,
    },
};
