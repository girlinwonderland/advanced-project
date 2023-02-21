import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/model/slice/counterSlice';
import { StateSchema } from '../config/stateSchema';

export function createReduxStore(initState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: CounterReducer },
        devTools: __IS_DEV__,
        preloadedState: initState,
    });
}
