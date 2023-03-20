import React from 'react';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import { RoutPath } from 'shared/config/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutPath.profile,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,
    },
];
