import { createSelector } from '@reduxjs/toolkit';
import { getUserAuth } from 'entities/User';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile, 
} from 'shared/const';
import { SidebarItemType } from '../types';

export const getSidebarItems = createSelector(getUserAuth, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'mainLink',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'aboutLink',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'article',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
