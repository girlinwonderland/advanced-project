import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { reducer: UserReducer } = userSlice;
export const { actions: UserActions } = userSlice;
