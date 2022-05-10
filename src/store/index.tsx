import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import apiCardsSlice from './apiCardsSlice';
import errorSlice from './errorSlice';
import filtersSlice from './filtersSlice';
import formCardsSlice from './formCardsSlice';
import formSlice from './formSlice';
import modalCardSlice from './modalCardSlice';
import searchTextSlice from './searchTextSlice';

export const API_KEY = 'https://rickandmortyapi.com/api/character';

export const store = configureStore({
  reducer: {
    modalCard: modalCardSlice,
    apiCards: apiCardsSlice,
    formsInputs: formSlice,
    formCards: formCardsSlice,
    errorMessage: errorSlice,
    searchText: searchTextSlice,
    filtersState: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
