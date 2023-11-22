import { configureStore } from '@reduxjs/toolkit';
import videoSlice from './videoSlice';
import appSlice from './appSlice';

const store = configureStore({
    reducer: {
        videoSlice: videoSlice,
        appSlice: appSlice,
    }
})

export default store;