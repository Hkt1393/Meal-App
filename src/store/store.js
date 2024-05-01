import {configureStore} from '@reduxjs/toolkit';
import featureReducer from '../features/featureSlice';

export const store = configureStore({
  reducer: featureReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
