import { useTranslation } from 'react-i18next';
import { BugErrorButton } from 'app/providers/ErrorBoundary';

export const Main = () => {
    const { t } = useTranslation('main');
    return (
        <>
            <BugErrorButton />
            <h1>{t('main')}</h1>
        </>
    );
};
