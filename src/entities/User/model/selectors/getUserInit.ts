import { StateSchema } from 'app/providers';

export const getUserInit = (state: StateSchema) => state.user?.init;
