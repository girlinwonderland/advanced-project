import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib';
import { ProfileReducer } from 'entities/Profile';
import { memo } from 'react';

const reducers: ReducerList = {
    profile: ProfileReducer,
};

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('profile page')}
            </div>
        </DynamicModuleLoader>
    );
});
