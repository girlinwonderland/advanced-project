import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    return (
        <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, i) => (
                <Button
                    theme={EButtonTheme.Clear}
                    onClick={() => onViewClick?.(viewType.view)}
                    key={i}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [styles.notSelected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
