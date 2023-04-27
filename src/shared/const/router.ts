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
export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
