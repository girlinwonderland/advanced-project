import { CounterSchema } from '../types/counterSchema';
import { CounterReducer, CounterActions } from './counterSlice';

describe('counterSlice', () => {
    test('should work', () => {
        const state: CounterSchema = { value: 10 };
        expect(CounterReducer(state, CounterActions.increment)).toEqual({ value: 11 });
    });
});
