import { Profile } from 'entities/Profile';
import { EValidateProfileError } from '../types';

export const validateProfileData = (profile?: Profile): EValidateProfileError[] => {
    const errors: EValidateProfileError[] = [];

    if (!profile) {
        return [EValidateProfileError.NO_DATA];
    }

    const {
        first, lastname, age, country,
    } = profile;

    if (!first || !lastname) {
        errors.push(EValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(EValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(EValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
