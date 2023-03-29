import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { $api } from 'shared';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { ScrollReducer } from 'features/SaveScroll';
import { StateSchema, ThunkExtraArg } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
        scroll: ScrollReducer,
    };
    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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
