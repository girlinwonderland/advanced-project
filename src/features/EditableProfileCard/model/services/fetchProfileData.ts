import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import { Profile } from 'entities/Profile';
import { EErrors } from 'app/providers/StoreProvider/consts';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<EErrors>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue(EErrors.IncorrectData);
        }
    },
);
