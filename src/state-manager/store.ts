import { configureStore } from '@reduxjs/toolkit';
import { userProfile } from './reducers/user-profile';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
    configureStore({
        devTools: true,
        reducer: {
            [userProfile.name]: userProfile.reducer
        }
    });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
