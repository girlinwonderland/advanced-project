import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoutPath } from 'shared/config/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { DropdownItem } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import {
    getUserAuth, UserActions, isUserAdmin, isUserManager,
} from 'entities/User';
import styles from 'widgets/Navbar/ui/Navbar.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuth);

    const onLogout = useCallback(() => {
        // setIsAuthModal(false);
        dispatch(UserActions.logout());
    }, [dispatch]);

    const dropDownItems: DropdownItem[] = useMemo(() => {
        const items: DropdownItem[] = [{
            content: t('logout'),
            onClick: onLogout,
        }];
        if (authData) {
            items.push({
                content: t('profile'),
                href: RoutPath.profile + authData.id,
            });
        }
        if (isAdmin || isManager) {
            items.push({
                content: t('admin'),
                href: RoutPath.admin_panel,
            });
        }
        return items;
    }, [onLogout, authData, t, isAdmin, isManager]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            className={styles.dropdown}
            items={dropDownItems}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
