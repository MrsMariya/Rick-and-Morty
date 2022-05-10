import { createSlice } from '@reduxjs/toolkit';
import { store } from '.';

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
export const textSearch = (state: ReturnType<typeof store.getState>) => state.searchText.searchText;
