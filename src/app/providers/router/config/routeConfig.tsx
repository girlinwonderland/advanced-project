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
import { EAppRoutes, RoutPath } from 'shared/const';

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
