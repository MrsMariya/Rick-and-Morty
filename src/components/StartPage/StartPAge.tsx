import SearchBar from '../SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import { useAppDispatch, useAppSelector } from '../../store';
import { modalCardApiSubmit } from '../../store/modalCardSlice';
import { moviesCards } from '../../store/apiCardsSlice';
import { MoviesCard } from '../../types/types';

const StartPage = () => {
  const movies = useAppSelector(moviesCards);
  const dispatch = useAppDispatch();

  const setMovieInfo = (id: number) => {
    const findMovies = movies.find((el: MoviesCard) => el.id === id);
    if (findMovies) {
      dispatch(modalCardApiSubmit(findMovies));
    }
  };

  return (
    <>
      <SearchBar />
      <CardList setMovieInfo={setMovieInfo} movies={movies} />
    </>
  );
};

export default StartPage;
