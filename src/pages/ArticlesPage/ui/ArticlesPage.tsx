import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(style.ArticlesPage, {}, [className])} />
    );
});
