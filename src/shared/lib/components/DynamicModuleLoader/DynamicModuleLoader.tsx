import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean,
    children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
    reducers,
    children,
    removeAfterUnmount = true,
}) => {
    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!(name in mountedReducers)) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
