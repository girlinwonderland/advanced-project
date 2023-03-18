import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    Text, Button, EButtonTheme, Input, 
} from 'shared';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('profile')} />
                <Button
                    className={styles.editBtn}
                    theme={EButtonTheme.OutLine}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.first}
                    placeholder={t('first name')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('last name')}
                    className={styles.input}
                />
            </div>
        </div>
    );
};
