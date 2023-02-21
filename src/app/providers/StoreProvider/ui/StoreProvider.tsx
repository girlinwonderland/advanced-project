import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/reduxStore';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    initState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initState }) => {
    const store = createReduxStore(initState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
