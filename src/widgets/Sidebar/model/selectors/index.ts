import { createSelector } from '@reduxjs/toolkit';
import { getUserAuth } from 'entities/User';
import { RoutPath } from 'shared/config/routeConfig';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types';

export const getSidebarItems = createSelector(getUserAuth, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutPath.main,
            Icon: MainIcon,
            text: 'mainLink',
        },
        {
            path: RoutPath.about,
            Icon: AboutIcon,
            text: 'aboutLink',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutPath.profile}${userData.id}`,
                Icon: ProfileIcon,
                text: 'profile',
                authOnly: true,
            },
            {
                path: RoutPath.articles,
                Icon: ArticleIcon,
                text: 'article',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
