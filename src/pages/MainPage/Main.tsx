import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

export const Main = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            {t('main')}
        </Page>
    );
});
