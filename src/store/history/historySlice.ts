import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { Storage } from '@capacitor/storage';

export type HistoryData = {
  id: string;
  imagePath: string;
  timeStamp: string;
  itemId: number;
  base64?: string;
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
    addToHistory: (state, action: PayloadAction<HistoryData>) => {
      if (state.currentHistory) {
        const currentState = [...state.currentHistory];
        state.currentHistory = [...currentState, action.payload];
      } else {
        state.currentHistory = [action.payload];
      }
      const storableHistory = state.currentHistory.map(history => {
        return {
          id: history.id,
          itemId: history.itemId,
          imagePath: history.imagePath,
          timeStamp: history.timeStamp,
        };
      });
      Storage.set({ key: 'history', value: JSON.stringify(storableHistory) });
    },
    setHistory: (state, action: PayloadAction<HistoryData[]>) => {
      state.currentHistory = action.payload;
    },
  },
});

export const { addToHistory, setHistory } = historySlice.actions;

export const getCurrentHistory = (state: RootState): HistoryData[] | null => {
  return state.history.currentHistory;
};

export default historySlice.reducer;
