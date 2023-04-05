import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme, Text } from 'shared';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import {
    getProfileData, getProfileReadonly, ProfileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuth } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuth);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('profile')} />
            {
                canEdit && (
                    <div>
                        {readonly
                            ? (
                                <Button
                                    theme={EButtonTheme.OutLine}
                                    onClick={onEdit}
                                >
                                    {t('edit')}
                                </Button>
                            )
                            : (
                                <>
                                    <Button
                                        theme={EButtonTheme.OutLine}
                                        onClick={onCancelEdit}
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        theme={EButtonTheme.OutLine}
                                        onClick={onSave}
                                    >
                                        {t('save')}
                                    </Button>
                                </>
                            )}
                    </div>
                )
            }
        </HStack>
    );
};
