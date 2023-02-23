import React, { InputHTMLAttributes, memo, useCallback } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
}: InputProps) => {
    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={styles.input}
                {...otherProps}
            />
        </div>
    );
});
