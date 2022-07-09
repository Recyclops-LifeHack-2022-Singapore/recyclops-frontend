import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/store/image/imageSlice';
import historyReducer from '@/store/history/historySlice';
import itemReducer from '@/store/item/itemSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    history: historyReducer,
    item: itemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
