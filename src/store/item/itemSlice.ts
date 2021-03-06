import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, items } from '@/models/items/items';
import { Remark, remarks } from '@/models/remarks/remarks';
import { remarkMaps } from '@/models/remarkMaps/remarkMaps';

interface ItemState {
  item: Item;
  remarksArr: Remark[];
  showModal: boolean;
  showErrorModal: boolean;
  isError: boolean;
}

const initialState: ItemState = {
  item: items[0],
  showModal: false,
  remarksArr: [],
  showErrorModal: false,
  isError: false,
};

export const itemSlice = createSlice({
  name: 'item',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateItem: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
      const remarksMapping = remarkMaps.filter(map => map.itemId === action.payload.id).map(map => map.remarkId);
      state.remarksArr = remarks.filter(remark => remarksMapping.includes(remark.id));
      if (state.remarksArr.length === 0) {
        state.remarksArr.push({ id: 0, text: 'Nothing to take note. Thank you for recycling!' });
      }
    },
    toggleShowModal: state => {
      state.showModal = true;
    },
    toggleHideModal: state => {
      state.showModal = false;
    },
    setShowErrorModal: (state, action: PayloadAction<boolean>) => {
      state.showErrorModal = action.payload;
    },
    setisError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { updateItem, toggleShowModal, toggleHideModal, setShowErrorModal, setisError } = itemSlice.actions;

export default itemSlice.reducer;
