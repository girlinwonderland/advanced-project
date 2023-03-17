import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, ELinkTheme, classNames } from 'shared';
import { SidebarItemType } from '../../model/items';
import style from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={ELinkTheme.Secondary}
            to={item.path}
            className={classNames(style.item, { [style.collapsed]: collapsed })}
        >
            <item.Icon className={style.icon} />
            <span className={style.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
