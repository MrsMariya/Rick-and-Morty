import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setStatus, statusCur } from '../../store/filtersSlice';

export type MyFiltersProps = {
  status: string;
  onChangeStatus: (statusFromInput: string) => void;
};

export const Status = ({ status, onChangeStatus }: MyFiltersProps) => {
  const dispatch = useAppDispatch();
  const curStatus = useAppSelector(statusCur);

  useEffect(() => {
    dispatch(setStatus(status));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setStatus(value));
    onChangeStatus(value);
  };

  return (
    <form className={'buttonsFilter'}>
      <label htmlFor={'status'}>
        <h4>Status</h4>
        <select
          name={'status'}
          className={'myCheck'}
          value={curStatus}
          onChange={handleChange}
          id={'gender'}
        >
          <option value={''}></option>
          <option value={'alive'}>alive</option>
          <option value={'dead'}>dead</option>
          <option value={'unknown'}>unknown</option>
        </select>
      </label>
    </form>
  );
};
