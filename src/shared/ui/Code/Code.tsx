import { memo, useCallback } from 'react';
import { classNames } from '../../lib/classNames';
import CopyIcon from '../../assets/icons/copy.svg';
import { Button, EButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <Button onClick={onCopy} className={styles.copyBtn} theme={EButtonTheme.Clear}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
