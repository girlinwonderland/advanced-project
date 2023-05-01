import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const AdminPanelPage = () => {
    const { t } = useTranslation('');

    return (
        <Page data-testid="AdminPanelPage">
            {t('admin page')}
        </Page>
    );
};
