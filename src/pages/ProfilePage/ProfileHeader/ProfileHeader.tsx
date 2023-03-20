import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme, Text } from 'shared';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, ProfileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import styles from './ProfileHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

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
    );
};
