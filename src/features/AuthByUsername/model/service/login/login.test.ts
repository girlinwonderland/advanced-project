import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import axios from 'axios';
import { UserActions } from 'entities/User';
import { TestAsyncFunc } from 'shared/lib';
import loginByUsername from './login';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('login fn test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const user = { username: 'user', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));
        const thunk = new TestAsyncFunc(loginByUsername);
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(user));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });
    test('error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncFunc(loginByUsername);
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('login error incorrect');
    });
});
