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
