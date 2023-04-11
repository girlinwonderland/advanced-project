import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { TestAsyncFunc } from 'shared/lib/test/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { EValidateProfileError } from '../types';
import { updateProfileData } from './updateProfileData';

const data = {
    username: 'admin',
    age: 24,
    country: Country.Armenia,
    lastname: 'k',
    first: 'asd',
    city: 'asf',
    currency: Currency.EUR,
};

describe('fetch profile fn test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error', async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
