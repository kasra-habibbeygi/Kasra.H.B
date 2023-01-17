import { createSlice } from '@reduxjs/toolkit';

export interface UserProfileType {
    them: string;
}

const initialState: UserProfileType = {
    them: 'dark'
};

export const userProfile = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        themeHandler(state, action) {
            state.them = action.payload;
        }
    }
});

export const { themeHandler } = userProfile.actions;
