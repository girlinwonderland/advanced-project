import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames, EButtonTheme } from 'shared';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    return (
        <Button
            onClick={toggle}
            theme={EButtonTheme.Clear}
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t(short ? 'shortTranslate' : 'translate')}
        </Button>
    );
};
