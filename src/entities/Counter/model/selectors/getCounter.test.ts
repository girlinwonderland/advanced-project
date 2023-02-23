import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { getCounter } from './getCounter';

describe('get counter', () => {
    test('should work', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
