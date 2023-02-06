import { useTranslation } from 'react-i18next';

export const About = () => {

    const { t } = useTranslation('about');

    return (
        <h1>{t('about')}</h1>
    )
}
