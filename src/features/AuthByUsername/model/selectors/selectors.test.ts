import { StateSchema } from 'app/providers';
import { getLoginError } from './getLoginError';
import { getLoginIsLoading } from './getLoginIsLoading';
import { getLoginPassword } from './getLoginPassword';
import { getLoginUsername } from './getLoginUsername';

describe('selectors should work', () => {
    const state: DeepPartial<StateSchema> = {
        login: {
            isLoading: false,
            password: '123',
            username: 'user',
        },
    };

    it('error', () => {
        expect(getLoginError(state as StateSchema)).toBe(false);
    });
    it('loading', () => {
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
    it('password', () => {
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });
    it('username', () => {
        expect(getLoginUsername(state as StateSchema)).toBe('user');
    });
    it('empty', () => {
        expect(getLoginUsername({} as StateSchema)).toBe('');
    });
});
