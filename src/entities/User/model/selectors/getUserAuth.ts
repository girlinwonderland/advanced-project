import { StateSchema } from 'app/providers';

export const getUserAuth = (state: StateSchema) => state.user.authData;
