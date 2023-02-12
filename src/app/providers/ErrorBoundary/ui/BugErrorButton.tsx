import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';

interface BugErrorButtonProps {
    className?: string
}

export const BugErrorButton: FC<BugErrorButtonProps> = () => {
    const [error, setError] = useState(false);
    const onClickError = useCallback(() => setError(true), []);

    const { t } = useTranslation();
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onClickError}>
            {t('throw error')}
        </Button>
    );
};
