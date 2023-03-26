import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutPath } from 'shared/config/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { Comment } from '../../model/types';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className, styles.loading])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={styles.username} />
                </div>
                <Skeleton className={styles.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <div className={styles.header}>
                <AppLink to={`${RoutPath.profile}${comment.user.id}`}>
                    {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                    <Text className={styles.username} title={comment.user.username} />
                </AppLink>
            </div>
            <Text className={styles.text} text={comment.text} />
        </div>
    );
});
