import { EErrors } from 'app/providers/StoreProvider';

export interface LoginSchema {
    username: string,
    password: string,
    isLoading: boolean,
    error?: EErrors,
}
