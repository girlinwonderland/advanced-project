import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList, useAppDispatch } from 'shared/lib';
import { ProfileReducer, fetchProfileData, ProfileCard } from 'entities/Profile';
import { memo, useEffect } from 'react';

const reducers: ReducerList = {
    profile: ProfileReducer,
};

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});
