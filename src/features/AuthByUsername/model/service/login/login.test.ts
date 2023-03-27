import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { UserActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncFunc } from 'shared/lib/test/testAsyncThunk';
import loginByUsername from './login';

describe('login fn test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const user = { username: 'user', id: '1' };
        const thunk = new TestAsyncFunc(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(user));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });
    test('error', async () => {
        const thunk = new TestAsyncFunc(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('login error incorrect');
    });
});
