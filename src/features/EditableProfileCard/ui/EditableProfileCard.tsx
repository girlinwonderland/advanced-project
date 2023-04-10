import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from 'entities/Profile';
import { ETextType, Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getProfileForm, getProfileIsLoading,
    getProfileError, getProfileReadonly,
    getProfileValidateErrors,
} from '../model/selectors';
import { EValidateProfileError } from '../model/types';
import { fetchProfileData } from '../model/services/fetchProfileData';
import { ProfileActions, ProfileReducer } from '../model/slice/profileSlice';
import { EditableProfileCardHeader } from './ProfileHeader/ProfileHeader';

interface EditableProfileCardProps {
    className?: string,
    id: string;
}

const reducers: ReducerList = {
    profile: ProfileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = memo(({ className, id }) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [EValidateProfileError.SERVER_ERROR]: t('server save error'),
        [EValidateProfileError.INCORRECT_COUNTRY]: t('incorrect region'),
        [EValidateProfileError.NO_DATA]: t('empty data'),
        [EValidateProfileError.INCORRECT_USER_DATA]: t('empty name or lastname'),
        [EValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(ProfileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(ProfileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(ProfileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="8"
                max
                className={classNames('', {}, [className])}
            >
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        type={ETextType.Error}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
