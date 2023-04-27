import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, TMode } from '../../lib/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    label?: string;
}

export const Select = <T extends string>({
    className,
    options,
    onChange,
    value,
    readonly,
    label,
}: SelectProps<T>) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={styles.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: TMode = {};

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && (
                <span className={styles.label}>{label}</span>
            )}
            <select
                disabled={readonly}
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
