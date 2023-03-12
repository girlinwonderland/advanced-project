import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    Button, classNames, ETextType, Input, Text,
} from 'shared';
import { DynamicModuleLoader, ReducerList } from 'shared/lib';
import {
    getLoginUsername, getLoginIsLoading, getLoginPassword, getLoginError,
} from '../../model/selectors';
import loginByUsername from '../../model/service/login/login';
import { LoginActions, LoginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const initialReducer: ReducerList = {
    login: LoginReducer,
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onChangeName = useCallback((e: string) => dispatch(LoginActions.setUsername(e)), [dispatch]);

    const onChangePassword = useCallback((e: string) => dispatch(LoginActions.setPassword(e)), [dispatch]);

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <Text title={t('loginForm')} />
                {error && (
                    <Text
                        text={t(`${error}`)}
                        type={ETextType.Error}
                    />
                )}
                <Input
                    autoFocus
                    type="text"
                    className={styles.input}
                    placeholder={t('usernamePlaceholder')}
                    onChange={onChangeName}
                    value={username}
                />
                <Input
                    type="text"
                    className={styles.input}
                    placeholder={t('passwordPlaceholder')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={styles.loginBtn}
                    onClick={onLogin}
                    disabled={isLoading}
                >
                    {t('logIn')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
