import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types';

const initialState: ScrollSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScroll: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { reducer: ScrollReducer } = scrollSlice;
export const { actions: ScrollActions } = scrollSlice;
