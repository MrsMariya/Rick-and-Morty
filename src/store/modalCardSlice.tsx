import { createSlice } from '@reduxjs/toolkit';
import { store } from '.';

const modalCardSlice = createSlice({
  name: 'modalCard',
  initialState: {
    modalCard: {
      id: '0',
      name: '',
      image: '',
      species: '',
      gender: '',
      status: '',
      created: '',
    },
  },
  reducers: {
    modalCardApiSubmit(state, action) {
      state.modalCard = action.payload;
    },
  },
});

export const { modalCardApiSubmit } = modalCardSlice.actions;
export default modalCardSlice.reducer;
export const modalCardInf = (state: ReturnType<typeof store.getState>) => state.modalCard.modalCard;
