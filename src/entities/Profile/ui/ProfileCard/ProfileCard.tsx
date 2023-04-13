import { memo } from 'react';
import { classNames, TMode } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextType, Text, TextAlign } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Loading } from 'widgets/Loading/ui/Loading';
import { HStack, VStack } from 'shared/ui/Stack';
import { CurrencySelect, Currency } from '../../../Currency';
import { Country, CountrySelect } from '../../../Country';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo(({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}
            >
                <Loading />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    type={ETextType.Error}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.Center}
                />
            </HStack>
        );
    }

    const mods: TMode = {
        [styles.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(styles.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={styles.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('first name')}
                className={styles.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('last name')}
                className={styles.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('age')}
                className={styles.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('city')}
                className={styles.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('username')}
                className={styles.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('avatar')}
                className={styles.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={styles.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={styles.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
