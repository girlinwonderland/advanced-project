import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentFormActions, AddCommentFormReducer } from '../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: AddCommentFormReducer,
};

export const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('comment');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(AddCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.AddCommentForm, {}, [className])}>
                <Input
                    className={styles.input}
                    placeholder={t('placeHolderComment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={EButtonTheme.OutLine}
                    onClick={onSendHandler}
                >
                    {t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
