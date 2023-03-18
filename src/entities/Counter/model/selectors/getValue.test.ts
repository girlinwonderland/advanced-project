import { StateSchema } from 'app/providers';
import { getCounterValue } from './getValue';

describe('get counter', () => {
    test('should work', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
