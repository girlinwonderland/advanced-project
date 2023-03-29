import { FC } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/reduxStore';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    initState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initState, asyncReducers }) => {
    const store = createReduxStore(initState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
