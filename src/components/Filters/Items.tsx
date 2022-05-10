import React, { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { items, setNumberOfCards } from '../../store/filtersSlice';

export type MyItemsProps = {
  item: number | string;
  onChangeItem: (itemFromInput: number) => void;
};

export const Items = ({ item, onChangeItem }: MyItemsProps) => {
  const dispatch = useAppDispatch();
  const curNum = useAppSelector(items);

  useEffect(() => {
    dispatch(setNumberOfCards(item));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setNumberOfCards(value));
    onChangeItem(Number(value));
  };

  return (
    <form className={'buttonsFilter'}>
      <label htmlFor={'items'}>
        <h4>Number of cards</h4>
        <select
          name={'items'}
          className={'myCheck'}
          id={'items'}
          value={curNum}
          onChange={handleChange}
        >
          <option defaultValue={'0'}></option>
          <option value={'5'}>5</option>
          <option value={'10'}>10</option>
          <option value={'15'}>15</option>
          <option value={'20'}>20</option>
        </select>
      </label>
    </form>
  );
};
