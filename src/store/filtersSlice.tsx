import { createSlice } from '@reduxjs/toolkit';
import { store } from '.';

export type FilteresState = {
  curStatus: string;
  curSpecies: string;
  curGender: string;
  page: string | number;
  curPage: string | number;
  number: string | number;
  text: string;
};

const initialState: FilteresState = {
  curStatus: '',
  curSpecies: '',
  curGender: '',
  page: '',
  curPage: '1',
  number: '',
  text: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.curStatus = action.payload;
    },
    setGender: (state, action) => {
      state.curGender = action.payload;
    },
    setSpecies: (state, action) => {
      state.curSpecies = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCurPage: (state, action) => {
      state.curPage = action.payload;
    },
    setNumberOfCards: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setStatus, setSpecies, setGender, setPage, setCurPage, setNumberOfCards } =
  filtersSlice.actions;
export default filtersSlice.reducer;
export const genderCur = (state: ReturnType<typeof store.getState>) => state.filtersState.curGender;
export const items = (state: ReturnType<typeof store.getState>) => state.filtersState.number;
export const onePage = (state: ReturnType<typeof store.getState>) => state.filtersState.page;
export const pageCur = (state: ReturnType<typeof store.getState>) => state.filtersState.curPage;
export const speciesCur = (state: ReturnType<typeof store.getState>) =>
  state.filtersState.curSpecies;
export const statusCur = (state: ReturnType<typeof store.getState>) => state.filtersState.curStatus;
export const res = (state: ReturnType<typeof store.getState>) => state.filtersState;
