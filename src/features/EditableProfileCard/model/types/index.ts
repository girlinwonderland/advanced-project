import { Profile } from 'entities/Profile';

export enum EValidateProfileError {
    INCORRECT_USER_DATA = 'incorrect user data',
    INCORRECT_AGE = 'incorrect age',
    INCORRECT_COUNTRY = 'incorrect country',
    NO_DATA = 'no data',
    SERVER_ERROR = 'server error',
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    form?: Profile;
    validateErrors?: EValidateProfileError[];
}
