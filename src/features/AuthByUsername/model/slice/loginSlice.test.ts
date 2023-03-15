import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { LoginReducer, LoginActions } from './loginSlice';

describe('login', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user', password: '12' };
    it('username', () => {
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('user new'))).toEqual({ username: 'user new', password: '12' });
    });
    it('password', () => {
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123'))).toEqual({ username: 'user', password: '123' });
    });
});
