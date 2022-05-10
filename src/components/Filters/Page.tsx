import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { onePage, pageCur, setCurPage, setPage } from '../../store/filtersSlice';
import './filters.css';

type MyPagesProps = {
  pageNumber: number | string;
  onChangePage: (pageFromInput: number) => void;
};

export const Page = ({ pageNumber, onChangePage }: MyPagesProps) => {
  const page = useAppSelector(onePage);
  const curPage = useAppSelector(pageCur);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPage(pageNumber));
  }, [dispatch, pageNumber]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchValue = value.match(regexp);
    if (matchValue) {
      const newValue = +matchValue[0];
      if (newValue <= 42) {
        onChangePage(newValue);
        dispatch(setCurPage(newValue));
      }
    }
  };

  return (
    <form className={'page'}>
      <h4>Total pages: 42 </h4>
      <span>
        <h4>Current page: {curPage}</h4>
      </span>
      <label htmlFor={'perPage'}>
        <h4>Per page</h4>
        <input value={page} onChange={handleChange} className={'currentPage'} />
      </label>
    </form>
  );
};
