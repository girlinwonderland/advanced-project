import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input, Button } from 'shared';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                className={styles.input}
                placeholder={t('usernamePlaceholder')}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('passwordPlaceholder')}
            />
            <Button
                className={styles.loginBtn}
            >
                {t('logIn')}
            </Button>
        </div>
    );
};
