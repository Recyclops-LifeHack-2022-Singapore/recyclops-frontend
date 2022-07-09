import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export type HistoryData = {
  id: string;
  imagePath: string;
  timeStamp: string;
  itemId: number;
};

interface HistoryState {
  currentHistory: HistoryData[] | null;
}

const initialState: HistoryState = {
  currentHistory: null,
};

export const historySlice = createSlice({
  name: 'history',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateCurrentHistory: (state, action: PayloadAction<HistoryData>) => {
      if (state.currentHistory) {
        const currentState = [...state.currentHistory];
        state.currentHistory = [...currentState, action.payload];
        return;
      }
      state.currentHistory = [action.payload];
    },
  },
});

export const { updateCurrentHistory } = historySlice.actions;

export const getCurrentHistory = (state: RootState): HistoryData[] | null => {
  return state.history.currentHistory;
};

export default historySlice.reducer;
