import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { apiCardSubmit, fetchCardsApi, moviesCards } from '../../store/apiCardsSlice';
import { errorMess, setErrorMessage } from '../../store/errorSlice';
import {
  res,
  setGender,
  setNumberOfCards,
  setPage,
  setSpecies,
  setStatus,
} from '../../store/filtersSlice';
import { setSearchText, textSearch } from '../../store/searchTextSlice';
import { Gender } from '../Filters/Gender';
import { Items } from '../Filters/Items';
import { Page } from '../Filters/Page';
import { Species } from '../Filters/Species';
import { Status } from '../Filters/Status';
import './searchBar.css';

const API_KEY = 'https://rickandmortyapi.com/api/character';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(moviesCards);
  const error = useAppSelector(errorMess);
  const text = useAppSelector(textSearch);
  const { curGender, curStatus, curSpecies, page, number } = useAppSelector(res);

  useEffect(() => {
    const result = localStorage.getItem('text');
    if (result) {
      dispatch(setSearchText(result));
    }
    if (!movies.length && !error) {
      dispatch(fetchCardsApi());
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchText(value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (text) {
      fetch(
        `${API_KEY}/?name=${text}&page=${page}&status=${curStatus}&gender=${curGender}&species=${curSpecies}`
      )
        .then((data) => {
          if (!data.ok) {
            dispatch(apiCardSubmit([]));
            throw Error('Сharacter not found!');
          } else return data.json();
        })
        .then((data) => {
          if (number) {
            dispatch(
              apiCardSubmit(
                data.results
                  .reverse()
                  .slice(data.results.length - +number)
                  .reverse()
              )
            );
          } else {
            dispatch(apiCardSubmit(data.results));
            dispatch(setErrorMessage(''));
          }
        })
        .catch((e) => {
          dispatch(setErrorMessage(e.message));
          dispatch(apiCardSubmit([]));
        });
    } else {
      fetch(
        `${API_KEY}/?name=${text}&page=${page}&status=${curStatus}&gender=${curGender}&species=${curSpecies}`
      )
        .then((data) => data.json())
        .then((data) => {
          if (number) {
            dispatch(
              apiCardSubmit(
                data.results
                  .reverse()
                  .slice(data.results.length - +number)
                  .reverse()
              )
            );
          } else {
            dispatch(apiCardSubmit(data.results));
            dispatch(setErrorMessage(''));
          }
        });
    }
  };

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  useEffect(() => {
    return () => {
      localStorage.setItem('text', text);
    };
  });

  const сhangePage = (pageNumber: string | number) => dispatch(setPage(pageNumber));
  const сhangeItem = (item: string | number) => dispatch(setNumberOfCards(item));
  const сhangeStatus = (status: string) => dispatch(setStatus(status));
  const сhangeGender = (gender: string) => dispatch(setGender(gender));
  const сhangeSpecies = (species: string) => dispatch(setSpecies(species));

  return (
    <>
      <form onSubmit={handleSubmit} className={'registre-form'}>
        {error && <p>{error}</p>}
        <input
          type={'search'}
          className={'search-input'}
          value={text}
          autoFocus
          onChange={handleChange}
          placeholder={'text'}
        />
        <button type={'submit'}>Search</button>
      </form>
      <div className={'filters'}>
        <Page pageNumber={page} onChangePage={сhangePage} />
        <Items item={number} onChangeItem={сhangeItem} />
        <Status status={curStatus} onChangeStatus={сhangeStatus} />
        <Gender gender={curGender} onChangeGender={сhangeGender} />
        <Species species={curSpecies} onChangeSpecies={сhangeSpecies} />
      </div>
    </>
  );
};

export default SearchBar;
