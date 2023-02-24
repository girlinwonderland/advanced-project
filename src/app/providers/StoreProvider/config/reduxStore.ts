import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername';
import { StateSchema } from '../config/stateSchema';

export function createReduxStore(initState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initState,
    });
}
