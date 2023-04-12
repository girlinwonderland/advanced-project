import { RouteProps } from 'react-router-dom';
import {
    AboutPage,
    AdminPanelPage,
    ArticleDetailsPage,
    ArticleEditPage,
    ArticlesPage,
    MainPage,
    NotFound,
    ProfilePage,
    ForbiddenPage,
} from 'pages';
import { UserRole } from 'entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}

export enum EAppRoutes {
    Main = 'main',
    About = 'about',
    Profile = 'profile',
    Articles = 'articles',
    Articles_Details = 'article_details',
    Article_Create = 'article_create',
    Article_Edit = 'article_edit',
    Admin_Panel = 'admin_panel',
    Forbidden = 'forbidden',
    NotFound = 'notFound'
}

export const RoutPath: Record<EAppRoutes, string> = {
    [EAppRoutes.Main]: '/',
    [EAppRoutes.About]: '/about',
    [EAppRoutes.Profile]: '/profile/',
    [EAppRoutes.Articles]: '/articles',
    [EAppRoutes.Articles_Details]: '/articles/',
    [EAppRoutes.Article_Create]: '/articles/new',
    [EAppRoutes.Article_Edit]: '/articles/:id/edit',
    [EAppRoutes.Admin_Panel]: '/admin',
    [EAppRoutes.Forbidden]: '/forbidden',
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
    [EAppRoutes.Article_Create]: {
        path: `${RoutPath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [EAppRoutes.Article_Edit]: {
        path: `${RoutPath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [EAppRoutes.Admin_Panel]: {
        path: `${RoutPath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [EAppRoutes.Forbidden]: {
        path: `${RoutPath.forbidden}`,
        element: <ForbiddenPage />,
    },
    [EAppRoutes.NotFound]: {
        path: RoutPath.notFound,
        element: <NotFound />,
    },
};
