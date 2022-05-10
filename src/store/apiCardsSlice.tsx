import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, store } from '.';
import { MoviesCard } from '../types/types';

export type ApiCardsState = {
  formApiCards: Array<MoviesCard>;
  status: 'loading' | 'success' | 'failed' | 'pending';
};

const initialState: ApiCardsState = {
  formApiCards: [],
  status: 'loading',
};

export const fetchCardsApi = createAsyncThunk<Array<MoviesCard>>(
  'apiCards/fetchApiCards',
  async () => {
    const res = await axios.get(`${API_KEY}`);
    return res.data.results;
  }
);

const apiCardsSlice = createSlice({
  name: 'apiCards',
  initialState,
  reducers: {
    apiCardSubmit(state, action: PayloadAction<Array<MoviesCard>>) {
      state.formApiCards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsApi.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCardsApi.fulfilled, (state, action) => {
        state.status = 'success';
        state.formApiCards = action.payload;
      })
      .addCase(fetchCardsApi.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { apiCardSubmit } = apiCardsSlice.actions;
export default apiCardsSlice.reducer;
export const moviesCards = (state: ReturnType<typeof store.getState>) =>
  state.apiCards.formApiCards;
