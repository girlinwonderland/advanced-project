import {
    AboutPage,
    AdminPanelPage,
    ArticleDetailsPage,
    ArticleEditPage,
    ArticlesPage,
    ForbiddenPage,
    MainPage,
    NotFound,
    ProfilePage,
} from 'pages';
import { UserRole } from 'entities/User';
import { AppRoutesProps } from 'shared/types';
import {
    EAppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteForbidden,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from 'shared/const';

export const routeConfig: Record<EAppRoutes, AppRoutesProps> = {
    [EAppRoutes.Main]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [EAppRoutes.About]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [EAppRoutes.Profile]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [EAppRoutes.Articles]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [EAppRoutes.Articles_Details]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [EAppRoutes.Article_Create]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [EAppRoutes.Article_Edit]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [EAppRoutes.Admin_Panel]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [EAppRoutes.Forbidden]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [EAppRoutes.NotFound]: {
        path: '*',
        element: <NotFound />,
    },
};
