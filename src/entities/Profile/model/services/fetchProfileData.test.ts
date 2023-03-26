import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { TestAsyncFunc } from 'shared/lib/test/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

describe('fetch profile fn test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const data = {
            id: '1',
            username: 'admin',
            age: 24,
            country: Country.Armenia,
            lastname: 'k',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
        };
        const thunk = new TestAsyncFunc(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error', async () => {
        const thunk = new TestAsyncFunc(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
