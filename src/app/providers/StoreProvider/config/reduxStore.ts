import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router';
import { $api } from 'shared';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { StateSchema, ThunkExtraArg } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };
    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
