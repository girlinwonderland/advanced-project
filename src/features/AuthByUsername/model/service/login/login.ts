import { ThunkConfig, EErrors } from 'app/providers/StoreProvider';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginProps {
    username: string,
    password: string,
}

const loginByUsername = createAsyncThunk<User, LoginProps, ThunkConfig<EErrors>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue(EErrors.IncorrectData);
        }
    },
);

export default loginByUsername;
