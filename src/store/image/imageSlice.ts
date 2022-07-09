import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export type ImageData = {
  path: string | undefined;
  preview: string;
};

interface ImageState {
  takenPhoto: ImageData | null;
}

const initialState: ImageState = {
  takenPhoto: null,
};

export const imageSlice = createSlice({
  name: 'image',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateTakenImage: (state, action: PayloadAction<ImageData | null>) => {
      state.takenPhoto = action.payload;
    },
  },
});

export const { updateTakenImage } = imageSlice.actions;

export const getCurrentTakenImage = (state: RootState): ImageData | null => {
  return state.image.takenPhoto;
};

export default imageSlice.reducer;
