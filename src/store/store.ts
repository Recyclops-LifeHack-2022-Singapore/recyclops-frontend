import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/store/image/imageSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
