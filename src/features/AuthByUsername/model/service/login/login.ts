import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EErrors } from '../../types/loginSchema';

interface LoginProps {
    username: string,
    password: string,
}

const loginByUsername = createAsyncThunk<User, LoginProps, { rejectValue: EErrors }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(EErrors.IncorrectData);
        }
    },
);

export default loginByUsername;
