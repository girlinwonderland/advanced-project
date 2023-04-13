import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, Suspense } from 'react';
import { Text, ETextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { VStack } from 'shared/ui/Stack';
import { Loading } from 'widgets/Loading/ui/Loading';
import { fetchComments } from '../../model/services/fetchComments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors';
import { addComments } from '../../model/services/addComment';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addComments(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchComments(id));
    });

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text
                size={ETextSize.L}
                title={t('comments')}
            />
            <Suspense fallback={<Loading />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
