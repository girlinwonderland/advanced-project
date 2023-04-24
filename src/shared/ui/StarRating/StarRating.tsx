import { memo, useState } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import StarIcon from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(({
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
}: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        styles.starIcon,
                        { [styles.selected]: isSelected },
                        [currentStarsCount >= starNumber ? styles.hovered : styles.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
