import { configureStore } from '@reduxjs/toolkit';
import periodReducer from '../features/period/periodSlice';

export const store = configureStore({
  reducer: {
    period: periodReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
