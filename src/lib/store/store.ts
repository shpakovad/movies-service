import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { tvmazeApi } from '@/lib/api/tvmazeApi';

export const store = configureStore({
  reducer: {
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tvmazeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
