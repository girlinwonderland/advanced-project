import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BugErrorButton } from 'app/providers/ErrorBoundary';

export const Main = memo(() => {
    const { t } = useTranslation('main');
    return (
        <>
            <BugErrorButton />
            <h1>{t('main')}</h1>
        </>
    );
});
