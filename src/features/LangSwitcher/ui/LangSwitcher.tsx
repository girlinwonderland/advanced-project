import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
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
});
