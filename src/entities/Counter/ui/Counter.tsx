import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getValue';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increase = () => {
        dispatch(CounterActions.increment());
    };
    const decrease = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="title-value">{value}</h1>
            <Button data-testid="increment" onClick={increase}>{t('increase')}</Button>
            <Button data-testid="decrement" onClick={decrease}>{t('decrease')}</Button>
        </div>
    );
};
