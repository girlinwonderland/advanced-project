import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const About = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            {t('about')}
        </Page>
    );
});
