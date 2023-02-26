import {configureStore} from '@reduxjs/toolkit';

import authReducer from './authReducer';
import homeReducer from './homeReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
