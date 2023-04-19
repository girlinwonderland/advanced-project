import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BugErrorButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

export const Main = memo(() => {
    const { t } = useTranslation('main');
    return (
        <>
            <BugErrorButton />
            <Counter />
            <h1>{t('main')}</h1>
        </>
    );
});
