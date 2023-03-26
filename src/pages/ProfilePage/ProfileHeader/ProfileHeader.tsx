import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme, Text } from 'shared';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, ProfileActions, updateProfileData, 
} from 'entities/Profile';
import { getUserAuth } from 'entities/User';
import styles from './ProfileHeader.module.scss';

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
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            {
                canEdit && (
                    <div className={styles.btnsWrapper}>
                        {readonly
                            ? (
                                <Button
                                    className={styles.editBtn}
                                    theme={EButtonTheme.OutLine}
                                    onClick={onEdit}
                                >
                                    {t('edit')}
                                </Button>
                            )
                            : (
                                <>
                                    <Button
                                        className={styles.editBtn}
                                        theme={EButtonTheme.OutLine}
                                        onClick={onCancelEdit}
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        className={styles.saveBtn}
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
        </div>
    );
};
