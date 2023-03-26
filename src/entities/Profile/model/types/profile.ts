import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum EValidateProfileError {
    INCORRECT_USER_DATA = 'incorrect user data',
    INCORRECT_AGE = 'incorrect age',
    INCORRECT_COUNTRY = 'incorrect country',
    NO_DATA = 'no data',
    SERVER_ERROR = 'server error',
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    form?: Profile;
    validateErrors?: EValidateProfileError[];
}
