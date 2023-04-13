import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/reduxStore';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    initState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    children?: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initState, asyncReducers }) => {
    const store = createReduxStore(initState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
