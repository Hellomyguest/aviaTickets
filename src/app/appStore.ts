import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { rootApi } from '@shared/api/rootApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware)
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
