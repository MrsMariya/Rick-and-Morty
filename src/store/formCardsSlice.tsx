import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '.';
import { FormsCardType } from '../types/types';

type InitialStateType = {
  formCards: Array<FormsCardType>;
};

const initialState: InitialStateType = {
  formCards: [],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    cardSubmit(state, action: PayloadAction<FormsCardType>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { cardSubmit } = formCardsSlice.actions;
export default formCardsSlice.reducer;
export const list = (state: ReturnType<typeof store.getState>) => state.formCards.formCards;
