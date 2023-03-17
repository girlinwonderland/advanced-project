import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const About = memo(() => {
    const { t } = useTranslation('about');

    return (
        <h1>{t('about')}</h1>
    );
});
