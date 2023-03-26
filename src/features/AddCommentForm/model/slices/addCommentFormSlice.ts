import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const AddCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: AddCommentFormActions } = AddCommentFormSlice;
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice;
