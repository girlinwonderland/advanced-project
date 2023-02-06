import { useTranslation } from 'react-i18next';

export const Main = () => {
    const { t } = useTranslation('main');
    return (
        <h1>{t('main')}</h1>
    )
}
